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



const roles = [
  {
    value:"",
    label : "-"
  },{
    value: '1',
    label: 'Agent Support',
  },
  {
    value: '2',
    label: 'Intervenant',
  },
  {
    value: '3',
    label: 'Administarateur',
  },
];

const initialValues = {
  Prenom : "",
  Nom : "",
  Telephone : "",
  NomUtilisateur : "",
  Email : "",
  motdepasse : "",
  confirmerMotdepasse : "",
  IdRole :"",
};
const phoneREGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const userScheme = yup.object().shape({
  Prenom : yup.string().required("required").max(50),
  Nom : yup.string().required("required").max(50),
  Telephone : yup.string().matches(phoneREGEX, "Le numéro de téléphone n'est pas valide").required("required"),
  NomUtilisateur : yup.string().required("required"),
  Email : yup.string().email("Email invalide").required("required"),
  IdRole : yup.string().required('required'),
  motdepasse : yup.string().required("required").max(50),
  confirmerMotdepasse : yup.string().required("required").max(50), 
});


function CreateUser() {
    //Imports the themeContext 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    /////

    
    const isMobile = useMediaQuery("(min-width:600px)")

    const handleFromSubmit = (values) =>{
      console.log(values);
    }

    // password field show/hide function and confirm password
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownConfirmPassword = (event) => {
      event.preventDefault();
  };



  return (
    <Box m="10px">
        <Header title="Utilisateur " subtitle="Création du utilisateur"/>
        <Box m="20px 0 0 0" >
        <Typography
                variant="h3"
                color={colors.grey[100]}
                sx={{m:"5px 0 5px 20px"}}>
                    Crée un nouvel utilisateur
        </Typography>

        <Formik 
          onSubmit={handleFromSubmit}
          initialValues={initialValues}
          validationSchema={userScheme}
          >
          {({values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
            <form onSubmit={handleSubmit}>
              <Box 
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))" // Changed to have 2 columns
                sx={{
                  "& > div": { gridColumn: isMobile ? undefined : "span 4" }, // Set gridColumn to span 2 columns
                }}
                >
                  <TextField 
                    fullWidth
                    variant='filled'
                    type='text'
                    label="Prenom"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Prenom} // Updated the value and name attributes
                    name='Prenom' // Updated the name attribute to match the field name
                    error={!!touched.Prenom && !!errors.Prenom}
                    helperText={touched.Prenom && errors.Prenom}
                    sx={{gridColumn: "span 1"}}
                  />
                   <TextField 
                    fullWidth
                    variant='filled'
                    type='text'
                    label="Nom"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Nom} // Updated the value and name attributes
                    name='Nom' // Updated the name attribute to match the field name
                    error={!!touched.Nom && !!errors.Nom}
                    helperText={touched.Nom && errors.Nom}
                    sx={{gridColumn: "span 1"}}
                  />
                  <TextField
                    variant="filled"
                    color='praimary'
                    id="IdRole"
                    select
                    label="Role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.IdRole} 
                    
                    error={!!touched.IdRole && !!errors.IdRole}
                    helperText={touched.IdRole && errors.IdRole}
                    SelectProps={{
                      native: true,
                    }}
                    sx={{gridColumn: "span 2"}}
                  >
                    {roles.map((option) => (
                      <option color="praimary" key={option.value} value={option.value} style={{backgroundColor:colors.praimary[400] ,color:colors.grey[100]}}>
                        {option.label}
                      </option>
                    ))}

                  </TextField>
                  <TextField 
                    fullWidth
                    variant='filled'
                    type='email'
                    label="E-mail"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Email}
                    name='Email'
                    error={!!touched.Email && !!errors.Email}
                    helperText={touched.Email && errors.Email}
                    sx={{ gridColumn: "span 2" }}
                  />
                   <TextField 
                    fullWidth
                    variant='filled'
                    type='tel'
                    label="Téléphone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Telephone} // Updated the value and name attributes
                    name='Telephone' // Updated the name attribute to match the field name
                    error={!!touched.Telephone && !!errors.Telephone}
                    helperText={touched.Telephone && errors.Telephone}
                    sx={{gridColumn: "span 2"}}
                  />
                  <TextField 
                    fullWidth
                    variant='filled'
                    type='text'
                    label="Nom d'utilisateur"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.NomUtilisateur} // Updated the value and name attributes
                    name='Telephone' // Updated the name attribute to match the field name
                    error={!!touched.NomUtilisateur && !!errors.NomUtilisateur}
                    helperText={touched.NomUtilisateur && errors.NomUtilisateur}
                    sx={{gridColumn: "span 4"}}
                  />
                  
                  <FormControl sx={{gridColumn:"span 2"}}>
                  <InputLabel htmlFor="motdepasse">Mot de passe</InputLabel>
                  <FilledInput 
                    fullWidth
                    variant='filled'
                    type={showPassword ? 'text' : 'password'}
                    label="Mot de passe"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.motdepasse}
                    name='motdepasse'
                    error={!!touched.motdepasse && !!errors.motdepasse}
                    helperText={touched.motdepasse && errors.motdepasse}
                    
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  </FormControl>
                  
                  <FormControl sx={{gridColumn:"span 2"}}>
                  <InputLabel htmlFor="confirmerMotdepasse">Confirmer Mot de passe</InputLabel>
                  <FilledInput 
                    
                    type={showConfirmPassword ? 'text' : 'password'}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirmerMotdepasse}
                    name='confirmerMotdepasse'
                    error={!!touched.confirmerMotdepasse && !!errors.confirmerMotdepasse}
                    helperText={touched.confirmerMotdepasse && errors.confirmerMotdepasse}
                    
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  </FormControl>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                    <Button type='submit' color='secondary' variant='contained'>
                      Ajouter Utilisateur
                    </Button>
              </Box>
            </form>  

          )}
        </Formik>
        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /> */}
        </Box>
    </Box>
  )
}

export default CreateUser