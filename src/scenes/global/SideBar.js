import {useState} from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


const Item= ({title, to, icon, selected, setSeleted})=>{
  const theme= useTheme();
  const colors= tokens(theme.palette.mode);

  return(
    <MenuItem 
      active={selected===false}
      style={{color:colors.grey[100]}}
      onClick={()=>setSeleted(title)}
      icon={icon}
      >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        "& .pro-sidebar":{
                minWidth:"100% !important"
        },
        "& .pro-sidebar-inner": { 
          background: `${colors.praimary[400]} !important`
        },
          "& .pro-icon-wrapper" : {
            backgroundColor:"transparent !important"
          },
          "& .pro-inner-item" : {
            padding : "5px 35px 5px 20px !important"
          },
          "& .pro-inner-item:hover" : {
            color: "#868dfb !important"
          },
          "& .pro-menu-item.active" : {
            color: "#6870fa !important"
          }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
        <MenuItem
          onClick={()=>setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box 
              display="flex"
              justifyContent="space-between"
              alignContent="center"
              ml="15px"
              >
              <Typography variant='h3' color={colors.grey[100]}>
                ADMINIS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon/>
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {/* User */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <img 
                alt="Profile Uuser"
                width={"100px"}
                height={"100px"}
                src={`../../assets/user.jpg`}
                style={{cursor:"pointer", borderRadius:"50%"}}
              />
            </Box>
            <Box textAlign={"center"}>
              <Typography  variant="h3" color={colors.grey[100]} fontWeight={"bold"} sx={{m:"10px 0 0 0"}}>HZ User</Typography>
              <Typography variant="h6" color={colors.greenAccent[500]} >Admin Panel</Typography>
            </Box>
          </Box>
        )}

        {/* Menu Items*/}
          <Box paddingLeft={isCollapsed  ? undefined : "6%"}>
            <Item 
              title="Dashbord"
              to="/"
              icon={<HomeOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m:"5px 0 5px 20px"}}
                style={{ overflowWrap: 'break-word' }}
              >SAV</Typography>
               <Item 
              title="List des Réparation"
              to="/ajouterutilisateur"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m:"5px 0 5px 20px"}}
                style={{ overflowWrap: 'break-word' }}
              >Clients</Typography>
              <Item 
              title="List des Clients"
              to="/clients"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m:"5px 0 5px 20px"}}
                style={{ overflowWrap: 'break-word' }}
              >Article</Typography>
              <Item 
              title="Article"
              to="/members"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Pièces de Rechange"
              to="/members"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m:"5px 0 5px 20px"}}
                style={{ overflowWrap: 'break-word' }}
              >Utilisateurs</Typography>
              <Item
              title="Les Utilisateurs"
              to="/utilisateurs"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Ajouter Utilisateur"
              to="/ajouterutilisateur"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default SideBar