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

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome To Your Dashboard" />
        <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "100px" }} />
          Download Reports
        </Button>
      </Box>
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
            gridColumn="span 3"
            backgroundColor={colors.praimary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <StateBox 
                title="237"
                subtitle="les Tickets Ouvert"
                progress="0.75"
                increase="+5%"
                icon={
                    <EmailIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
        </Box>
        <Box
            gridColumn="span 3"
            backgroundColor={colors.praimary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <StateBox 
                title="237"
                subtitle="les Tickets Ouvert"
                progress={0.75}
                increase="+5%"
                icon={
                    <EmailIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
        </Box>
        <Box
            gridColumn="span 3"
            backgroundColor={colors.praimary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <StateBox 
                title="237"
                subtitle="les Tickets Ouvert"
                progress={0.75}
                increase="+5%"
                icon={
                    <EmailIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
        </Box>
        <Box
            gridColumn="span 3"
            backgroundColor={colors.praimary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <StateBox 
                title="237"
                subtitle="les Tickets Ouvert"
                progress={0.75}
                increase="+5%"
                icon={
                    <EmailIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;

      {/* <Grid xs="12" gap="20px" gridAutoRows="140px" container>
          <Grid item  md="3"
            bgcolor={colors.praimary[400]} 
            display="flex"
            >
              <StateBox 
                title="237"
                subtitle="les Tickets Ouvert"
                progress="0.75"
                increase="+5%"
                icon={
                    <EmailIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
          </Grid>
          <Grid item  xs="2"  md="3"
            bgcolor={colors.praimary[400]} 
            display="flex"
            >
              <StateBox 
                title="237"
                subtitle="les Tickets Ouvert"
                progress="0.75"
                increase="+5%"
                icon={
                    <EmailIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
          </Grid>
          <Grid item xs="2"  md="3"
            bgcolor={colors.praimary[400]} 
            display="flex"
            >
              <StateBox 
                title="237"
                subtitle="les Tickets Ouvert"
                progress="0.75"
                increase="+5%"
                icon={
                    <EmailIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
          </Grid>
          <Grid item  xs="2"  md="3"
            bgcolor={colors.praimary[400]} 
            display="flex"
            >
              <StateBox 
                title="237"
                subtitle="les Tickets Ouvert"
                progress="0.75"
                increase="+5%"
                icon={
                    <EmailIcon sx={{color : colors.greenAccent[600],fontSize :"26px" }}/>
                }
            />
          </Grid>
      </Grid>

 */}
