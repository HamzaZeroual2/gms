import React from 'react'
import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar, GridToolbarColumnsButton } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function TicketsList() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 10,
      maxColumns: 10,
    });
    console.log(data);
  return (
    <Box m="20px">
    <Box
      display="flex"
      justifyContent="space-between"
      alignContent={"center"}
    >
      <Header title="Tickets" subtitle="Gestion des Tickets" />
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
            borderBottom : "none"
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
        rows={data.rows}
        columns={data.columns}
        components={{Toolbar : GridToolbarColumnsButton}}
      />
    </Box>
    </Box>
  )
}

export default TicketsList