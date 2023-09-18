import { createContext, useState, useContext} from "react";
import AuthService from "../Services/AuthService"; 
import { Navigate ,useNavigate} from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [role,setRole] = useState('admin');
    const [username,setUsername] = useState('user');
    const navigate = useNavigate();
    const roles =['admin','support','inertvenant']

    const login = async (username, password) => {
        await AuthService.Login(username,password).then((res)=>{
            setIsAuthenticated(true);
            setRole(res.role);
            setUsername(res.username);
            navigate('/');
        })
        // .catch(error=>{
        //     console.log(error.response.data);
        // })

    }
    const changeRole= async (newrole)=>{
        setRole(newrole)
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, login,role,roles,changeRole,username}}>
             {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=>useContext(AuthContext);
export default AuthProvider;