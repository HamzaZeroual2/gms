
import React from 'react'
import {Box, Typography, useTheme} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import {tokens} from "../../theme";
import { AdminPanelSettingsOutlinedIcon } from '@mui/icons-material/AdminPanelSettingsOutlined';
import { LockOpenOutlinedIcon } from '@mui/icons-material/LockOpenOutlined';
import { SecurityOutlinedIcon } from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header"
import { useState,useEffect } from 'react';

function Clients() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [clients, setClients]=useState([]);
  const columns=[
    {field : "id",headerName: "ID"},
    {field : "nom", headerName : "Nom",  },
    {field : "prenom", headerName : "Prénom",},
    {field : "telephone1", headerName: "Télephone 1",},
    {field : "telephone2", headerName: "Télephone 2",},
    {field : "email", headerName: "Email",},
    {field : "adresse", headerName: "Adresse"},
  ]
    useEffect(()=>{
        getApiData();
    },[])

    // Function to collect data
const getApiData = async () => {
    const response = await fetch(
      "https://localhost:7059/api/clients"
    ).then((response) => response.json());
  
    // update the state
    setClients(response);
  };

  return (
    <Box m="20px">
        <Header title="Clients" subtitle="Gestion des Clients"/>
        <Box m="40px 0 0 0"  sx={{
          "& .MuiDataGrid-root" :{
            border:"none"
          },
          "& .MuiDataGrid-cell" : {
            borderBottom : "none"
          },
          "& .name-column--cell" : {
            color : colors.greenAccent[300]
          },"& .MuiDataGrid-columnHeaders" : {
            backgroundColor: colors.blueAccent[700],
            borderBottom : "none"
          },
          "& .MuiDataGrid-virtualScroller":{
            backgroundColor: colors.praimary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop:"none",
            backgroundColor: colors.blueAccent[700]
          }
        }}
        >
            <DataGrid
                rows={clients}
                columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Clients