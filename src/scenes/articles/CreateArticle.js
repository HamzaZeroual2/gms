import React, { useState } from 'react'
import {Box,Button,TextField, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import Header from "../../components/Header";


import { Formik } from 'formik';
import * as yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';

import UsersService from '../../Services/UsersService';

const initialValues = {
    Prenom : "",
    Nom : "",
    Telephone : "",
    NomUtilisateur : "",
    Email : "",
    motdepasse : "",
    confirmerMotdepasse : "",
  };
  const phoneREGEX = new RegExp('^\\+?[0-9]{1,3}[-\\s\\.]?\\(?[0-9]{3}\\)?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4}$');

  
  const userScheme = yup.object().shape({
    Prenom : yup.string().required("required").max(50),
    Nom : yup.string().required("required").max(50),
    Telephone1 : yup.string().matches(phoneREGEX, "Le numéro de téléphone n'est pas valide").required("required"),
    Telephone2 : yup.string().matches(phoneREGEX, "Le numéro de téléphone n'est pas valide").optional(),
    Email : yup.string().email("Email invalide").required("required"),
    Adresse : yup.string().required("required").max(150),
    
  });
  


function CreateArticle() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isMobile = useMediaQuery("(min-width:600px)");
    /////
    const [successMsg,setSuccessMsg] = useState(
      {
        success : false,
        response: [],
      }
    );
    const [errorMsg,setErrorMsg] = useState(
      {
        error : false,
        response : [],
      }
    ); 
    
    const handleFromSubmit = (values,resetForm) =>{
        UsersService.createUser(values).then(
          response => {
            setSuccessMsg({
              success : true,
              response : response.data
            });
            resetForm();
            console.log(response.data)
           
          }
        ).catch(error=>{
          console.log(error.response?.data);
          
          setErrorMsg({
            error: true,
            response: error.response?.data || "An error occurred."
          })
        });
        console.log(successMsg,errorMsg);
      }

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
      onSubmit={(values, { resetForm }) => {
        handleFromSubmit(values,resetForm);
  }}
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
                variant='outlined'
                type='text'
                label="Prenom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Prenom} // Updated the value and name attributes
                name='Prenom' // Updated the name attribute to match the field name
                error={!!touched.Prenom && !!errors.Prenom}
                helperText={touched.Prenom && errors.Prenom}
                sx={{gridColumn: "span 2"}}
              />
               <TextField 
                fullWidth
                variant='outlined'
                type='text'
                label="Nom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Nom} // Updated the value and name attributes
                name='Nom' // Updated the name attribute to match the field name
                error={!!touched.Nom && !!errors.Nom}
                helperText={touched.Nom && errors.Nom}
                sx={{gridColumn: "span 2"}}
              />
              <TextField 
                fullWidth
                variant='outlined'
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
                variant='outlined'
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
                variant='outlined'
                type='text'
                label="Nom d'utilisateur"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.NomUtilisateur} // Updated the value and name attributes
                name='NomUtilisateur' // Updated the name attribute to match the field name
                error={!!touched.NomUtilisateur && !!errors.NomUtilisateur}
                helperText={touched.NomUtilisateur && errors.NomUtilisateur}
                sx={{gridColumn: "span 4"}}
              />
              
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
                <Button type='submit' color='secondary' variant='contained'>
                  Ajouter Article
                </Button>
          </Box>
        </form>  

      )}
    </Formik>
   
    </Box>
</Box>
  )
}

export default CreateArticle