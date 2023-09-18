import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import Header from "../../components/Header";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Button from '@mui/material/Button';
const mockDataIntervention = [
    {
      id: 1,
      Date_debut: '2023-09-01 08:30', // Added hours and minutes
      Date_fin: '2023-09-05 12:45',   // Added hours and minutes
      Id_utilisateur: 'user001',
      Id_ticket: 101,
      Statut: 'En cours',             // Added Statut
    },
    {
      id: 2,
      Date_debut: '2023-09-02 09:15', // Added hours and minutes
      Date_fin: '2023-09-06 13:30',   // Added hours and minutes
      Id_utilisateur: 'user002',
      Id_ticket: 102,
      Statut: 'Réalisé',             // Added Statut
    },
    {
      id: 3,
      Date_debut: '2023-09-03 10:00', // Added hours and minutes
      Date_fin: '2023-09-07 14:15',   // Added hours and minutes
      Id_utilisateur: 'user003',
      Id_ticket: 103,
      Statut: 'Annulé',              // Added Statut
    },
    // Add more data as needed
  ];


function Interventions() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns=[
        {field : "id",headerName: "ID",flex:1},
        {field : "Date_debut", headerName : "Date début",flex:1 },
        {field : "Date_fin", headerName : "Date fin",flex:1},
        {field : "Id_utilisateur", headerName: "Id utilisateur",flex:1},
        {field : "Id_ticket", headerName: "Id ticket",flex:1,
         renderCell:(params)=>{
            return <Button variant="outlined" startIcon={<ConfirmationNumberIcon />} onClick={()=>{console.log(params)}}>
            {params.value}
          </Button>
         }
        },
        {field : "Statut", headerName: "Statut",
        renderCell: (params) => {
            const status = params.value;
            let chipColor = 'default';
    
            if (status === 'En cours') {
              chipColor = 'primary';
            } else if (status === 'Réalisé') {
              chipColor = 'success';
            } else if (status === 'Annulé') {
              chipColor = 'error';
            }
    
            return <Chip label={status} color={chipColor} variant="outlined" />;
          },flex:1},
        
      ]
  return (


    <Box m="20px">
    <Box
      display="flex"
      justifyContent="space-between"
      alignContent={"center"}
    >
      <Header title="Interventions" subtitle="Mes Inteventions" />
     
    </Box>

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
          backgroundColor: colors.greenAccent[700],
          borderBottom : "none",
          fontSize:"14px",
          display: 'flex', // Use flexbox for header
      
        },
        "& .MuiDataGrid-virtualScroller":{
          backgroundColor: colors.praimary[400]
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop:"none",
          backgroundColor: colors.greenAccent[700]
        }
      }}
      >
        
      <DataGrid
        rows={mockDataIntervention}
        columns={columns}
        pageSize={5}
        
        slots={{
            toolbar: GridToolbar,
        }}
        />

    </Box>
    </Box>
  )
}

export default Interventions