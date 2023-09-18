import React ,{ useEffect, useState } from 'react'
import { Button, Container, TextField, Typography, Box, useTheme} from '@mui/material';
import {FilledInput} from "@mui/material";
import { tokens } from '../../theme';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import KeyIcon from '@mui/icons-material/Key';
import FormControl from '@mui/material/FormControl';

import { Formik } from 'formik';
import * as yup from "yup";
import { useAuth } from '../../Providers/AuthProvider';

const initialValues = {
  username : "",
  password : "",
};
const userScheme = yup.object().shape({
  username : yup.string().required("required").max(50),
  password : yup.string().required("required").max(50),
})


function Login() {
    //Contexts
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {isAuthenticated, login} = useAuth();
    //
    const [errorMsg,setErrorMsg] = useState(
      {
        error : false,
        response : []
      }
    ); 

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  

    const handleLogin = async (values) => {
      // Handle login logic here
      try{
        await login(values.username,values.password);
      } catch(error){
        console.log(error.response.data);
        setErrorMsg({
          error: true,
          response: error.response?.data || "An error occurred."
        });
      }
    }
  return (
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
  <Grid item xs={3}>
  <Box >
        <Typography variant="h4" align="center" gutterBottom>
        Se connecter à votre compte
        </Typography>
        <Box bgcolor={colors.redAccent[400]}>
        {errorMsg.error && 
        <Alert variant="outlined" severity="error">
          {errorMsg.response.message}
        </Alert>
        }
        </Box>
        <Formik 
          onSubmit={handleLogin}
          initialValues={initialValues}
          validationSchema={userScheme}
          >
          {({values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
            <form onSubmit={handleSubmit}>

          <Box display="flex" flexDirection="column" alignItems="center" sx={{
        '& > :not(style)': { m: 1, width: '25h' },}}>

          <FormControl variant="filled" >
          <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
            <FilledInput
              type="text"
              name='username'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
              error={!!touched.username && !!errors.username}
              helpertext={touched.username && errors.username}
              startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
              }
            />
            </FormControl>
            <FormControl variant="filled" >
                  <InputLabel htmlFor="password">Mot de passe</InputLabel>
                  <FilledInput 
                    type={showPassword ? 'text' : 'password'}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name='password'
                    error={!!touched.password && !!errors.password}
                    helpertext={touched.password && errors.password}
                    endAdornment={
                      <>
                      <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment></>
                    }
                  />
                  </FormControl>
            <Button type="submit" variant="contained" color='secondary'>
              Login
            </Button>
          </Box>
        </form>
        )}
        </Formik>
      </Box>
  </Grid>
</Grid>
    
    
  )
}

export default Login