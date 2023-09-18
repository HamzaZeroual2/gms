import {Box, IconButton, useTheme} from "@mui/material";
import { useContext, useState } from "react";
import {ColorModeContext, tokens } from '../../theme';
import InputBase from "@mui/material/InputBase";

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { SearchOutlined } from '@mui/icons-material';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useAuth } from "../../Providers/AuthProvider";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { roles ,changeRole,role} = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    changeRole(role);
  };
  const handleClose = (newrole) => {

    changeRole(newrole);
    setAnchorEl(null);
  };
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* SEARCH BAR */}
      <Box 
      display="flex"
      backgroundColor={colors.praimary[400]}
      borderRadius="3px"
      >
      
      <InputBase sx={{ml:2, flex: 1}} placeholder="Search"/>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined/>
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode ==='dark' ? 
          (<LightModeOutlinedIcon/>):(<DarkModeOutlinedIcon/>)}
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>

        <IconButton>
          <PersonOutlineOutlinedIcon/>
        </IconButton>

       
        <IconButton
        
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          <SettingsOutlinedIcon/>
        </IconButton>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        
        TransitionComponent={Fade}
      >
        {
          roles.map((item,index)=>{
            return(<MenuItem key={index} onClick={() => handleClose(item)} selected={item===role}>{item}</MenuItem>)
          })
        }
        
      </Menu>
      </Box>
    </Box>
  )
}

export default Topbar