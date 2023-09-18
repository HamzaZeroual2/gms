import React from 'react';
import Config from './config';
import axios from "axios";


const API_URL = Config.BASE_URL + "/tickets";

const createTicket = ({Nom,Description,DateCreation,categorie,priorite,statut}) => {
    return axios.post(API_URL,{Nom,Description,DateCreation,categorie,priorite,statut})
  }

const updateTicket =()=>{

}

const deleteTicket = () => {

}
const getTicketById = () => {

}
const getAllTicket = () => {
  
}
const getAllTicketsByUser = ()=>{

}
const TicketsService = {
  createTicket,
  updateTicket,
  deleteTicket,
  getTicketById,
  getAllTicket,
  getAllTicketsByUser
  
}

export default TicketsService




