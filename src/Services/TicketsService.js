import React from 'react';
import Config from './config';
import axios from "axios";


const API_URL = Config.BASE_URL + "/tickets";

const createTicket = ({Nom,Description,DateCreation,categorie,priorite,statut}) => {
    return axios.post(API_URL,{Nom,Description,DateCreation,categorie,priorite,statut})
  }

const updateTicket =()=>{

}

const deleteTicket = (id) => {

}
const getTicketById = (id) => {

}
const getOpenTickets = () => {

}
const getOpenTicketById = (id) => {

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
  getAllTicketsByUser,
  getOpenTickets,
  getAllTicket,
  getOpenTicketById
  
}

export default TicketsService




