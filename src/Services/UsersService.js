import React from 'react';
import Config from './config';
import axios from "axios";

const API_URL = Config.BASE_URL + "/Authenticate";
const createUser = ({Nom,Prenom,Adresse,Telephone,Email,NomUtilisateur,motdepasse,role}) => {
  return axios.post(API_URL + "/register",
  {Nom,Prenom,Adresse,Telephone,Email,NomUtilisateur,motdepasse,role},{
    withCredentials : true,
  })
}


const updateUser = ({Nom,Prenom,Adresse,Telephone,Email,NomUtilisateur,motdepasse})=>{
    
}
const getUserByID = (id) => {
  return axios.get(API_URL + "/getUserById",id
  ,{
    withCredentials : true,
  });
}
const getUserByRole = (role) =>{
  return axios.get(API_URL + "/getusersByRole",role,
    {
      withCredentials : true,
    }
  );
}
const UsersService ={
  createUser,
  updateUser,
  getUserByID,
  getUserByRole

}

export default UsersService