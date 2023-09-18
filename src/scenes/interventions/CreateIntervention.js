import React, { useState } from 'react'
import {Box,Button,Input,TextField, Typography, useTheme,FilledInput} from "@mui/material";
import {tokens} from "../../theme";
import Header from "../../components/Header";


import { Formik } from 'formik';
import * as yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';


import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


function CreateIntervention() {
    //Imports the themeContext 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    /////
  return (
    <Box m="10px">
    <Header title="Intervention " subtitle="Création une intervention"/>
    <Box m="20px 0 0 0" >
    
      
    </Box>
    </Box>
  )
}

export default CreateIntervention