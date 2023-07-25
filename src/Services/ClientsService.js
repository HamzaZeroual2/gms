import axios from "axios";
import Config from "./config";

const API_URL = Config.BASE_URL + "/Clients";

const GetAllClients = ()=>{
    return axios.get(API_URL);
}

const GetClientBYId =(id)=>{
    return axios.get(API_URL,{
        params :{
            id : id
        },
        withCredentials : true
    });
}

const ClientsService = {
    GetAllClients,
    GetClientBYId
};

export default ClientsService;