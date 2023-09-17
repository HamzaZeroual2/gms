import { createContext, useState, useContext} from "react";
import AuthService from "../Services/AuthService"; 
import { Navigate ,useNavigate} from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();
    const login = async (username, password) => {
        await AuthService.Login(username,password).then((res)=>{
            setIsAuthenticated(true);
            navigate('/');
        })
        // .catch(error=>{
        //     console.log(error.response.data);
        // })
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, login}}>
             {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=>useContext(AuthContext);
export default AuthProvider;