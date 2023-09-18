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
import { useAuth } from '../../Providers/AuthProvider';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';
import WarningIcon from '@mui/icons-material/Warning';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
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
  const {role} = useAuth();
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
              icon={<LeaderboardIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Dashbord Intervenant"
              to="/intervenant"
              icon={<LeaderboardIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
               {
                !isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[200]}
                sx={{m:"5px 0 5px 20px"}}
                style={{ overflowWrap: 'break-word' }}
              >Gestion des Tickets</Typography>
              
              )}
              <Item 
              title="Les Tickets"
              to="/tickets"
              icon={<ConfirmationNumberIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Créer Ticket"
              to="/ajouterticket"
              icon={<AddIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              {
                !isCollapsed && (<Typography
                  variant="h6"
                  color={colors.grey[200]}
                  sx={{m:"5px 0 5px 20px"}}
                  style={{ overflowWrap: 'break-word' }}
                >Gestion des interventions</Typography>)
              }
              

              <Item 
              title="List des interventions"
              to="/listeintervention"
              icon={<WorkIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Creer interventions"
              to="/ajouterinterventions"
              icon={<AddIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Mes intervention"
              to="/mesinterventions"
              icon={<WorkIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              {
                !isCollapsed && (
                  <Typography
                  variant="h6"
                  color={colors.grey[200]}
                  sx={{m:"5px 0 5px 20px"}}
                  style={{ overflowWrap: 'break-word' }}
                >La base de connaissances</Typography>
              )}
              {
                !isCollapsed && (
                  <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m:"5px 0 5px 30px"}}
                style={{ overflowWrap: 'break-word' }}
              >Gestion des problémes</Typography>
              )}
              
               <Item 
              title="Liste des probléme"
              to="/listeprobleme"
              icon={<WarningIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Ajouter un probléme"
              to="/ajouterprobleme"
              icon={<AddIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              {
                !isCollapsed && (<Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m:"5px 0 5px 30px"}}
                style={{ overflowWrap: 'break-word' }}
              >Gestion des solutions</Typography>
              )}
              
               <Item
              title="Liste des Solutions"
              to="/listeprobleme"
              icon={<TaskOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item
              title="Ajouter une solution"
              to="/ajoutersolution"
              icon={<AddIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />

              {/* Gestion des Utilisateurs de Systéme Role [ADMIN] */}
              {
                !isCollapsed && (<Typography
                variant="h6"
                color={colors.grey[200]}
                sx={{m:"5px 0 5px 20px"}}
                style={{ overflowWrap: 'break-word' }}
              >Utilisateurs</Typography>
              )}
              
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
              icon={<GroupAddOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />

              {/* LES Utilités de Systéme Role [ADMIN] */}
              {
                role==='admin' && <>
                <Typography
                variant="h6"
                color={colors.grey[200]}
                sx={{m:"5px 0 5px 20px"}}
                style={{ overflowWrap: 'break-word' }}
              >Utilités</Typography>
              <Item 
              title="Categories"
              to="/categories"
              icon={<CategoryOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Priorité"
              to="/priorite"
              icon={<LabelImportantOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Status"
              to="/statuts"
              icon={<AssignmentTurnedInOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              />
              <Item 
              title="Services"
              to="/services"
              icon={<BusinessOutlinedIcon/>}
              selected={selected}
              setSeleted={setSelected}
              /></>
              }
              
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default SideBar