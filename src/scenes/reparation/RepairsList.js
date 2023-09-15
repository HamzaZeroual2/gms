import React from 'react'
import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function RepairsList() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
    <Box
      display="flex"
      justifyContent="space-between"
      alignContent={"center"}
    >
      <Header title="Réparations" subtitle="Gestion des Réparations" />
    </Box>




    
    </Box>
  )
}

export default RepairsList