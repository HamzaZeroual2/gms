import React from "react";
import Header from "../../components/Header";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StateBox from "../../components/StateBox";
import ProgressCircle from "../../components/ProgressCircle";

import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import WorkIcon from '@mui/icons-material/Work';


function DashboardIntervenant() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent={"center"}
      >
        <Header title="Intervenant Panel" subtitle="Mes Inteventions & Tickets" />
       
      </Box>

       {/* GRID & Charts */}

      <Box 
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      >
        {/* ROW 1 */}

        <Box
            gridColumn="span 6"
            backgroundColor={colors.praimary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <StateBox 
                title="7/10"
                subtitle="les Tickets Ouvert"
                progress={7/10}
                increase={7/10*100+" %"}
                icon={
                    <ConfirmationNumberIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
        </Box>
        <Box
            gridColumn="span 6"
            backgroundColor={colors.praimary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <StateBox 
                title="3/10"
                subtitle="Votre Interventions clôturée"
                progress={(3/10)}
                increase={3/10*100+ " %"}
                icon={
                    <WorkIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
        </Box>
        
        
      </Box>
    </Box>
  );
}

export default DashboardIntervenant;

      