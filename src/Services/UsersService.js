import React from 'react';
import Config from './config';
import axios from "axios";

const API_URL = Config.BASE_URL + "/Authenticate/register";
const createUser = ({Nom,Prenom,Adresse,Telephone,Email,NomUtilisateur,motdepasse}) => {
  return axios.post(API_URL,{Nom,Prenom,Adresse,Telephone,Email,NomUtilisateur,motdepasse})
}

const updateUser = ()=>{

}
const UsersService ={

createUser,
updateUser

}

export default UsersService