import axios from "axios";
import Config from "./config";

const API_URL = Config.BASE_URL + "/Authenticate";

const Login = (emial, password)=> {
    return axios.post(API_URL+"/login", {
        emial,
        password,
    },{
        withCredentials : true,
    })
    .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
};

const Register = (firstname, lastname,email,username,phone,password)=>{
    return axios.post(API_URL + "/Register", {
        firstname,
         lastname,
         email,
         username,
         phone,
         password
    },{
      withCredentials : true,
  })
    .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
}

const Logout = (username)=>{
    return axios.post(API_URL + "/Revoke",{
        username:username
    },{
      withCredentials : true,
  }).then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
}

const AuthService = {
    Login,
    Register,
    Logout
};

export default AuthService;

