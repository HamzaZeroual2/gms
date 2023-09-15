import React from 'react'
import Header from "../../components/Header";

import {Box,Button,TextField, Typography, useTheme} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { tokens } from "../../theme";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker  } from '@mui/x-date-pickers/DateTimePicker';
import { Formik } from 'formik';
import * as yup from "yup";
import dayjs from 'dayjs';
import { useState } from 'react';
import { useEffect } from 'react';

// import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';


const categories = [
  {
    value:"",
    label : "-"
  },{
    value: 'Categorie1',
    label: 'Incident logiciel',
  },
  {
    value: 'Categorie2',
    label: 'Incident matériel',
  },
];
const priorite = [
  {
    value: 'Normal',
    label: 'Normal',
  },
  {
    value: 'Urgent',
    label: 'Urgent',
  },
  {
    value: "Élevée",
    label: "Élevée",
  }
];

const statut = [
  {
    value: 'Nouveau',
    label: 'Nouveau',
  },
  {
    value: 'En cours',
    label: 'En cours',
  },{
    value:"En attente",
    label: "En attente",
  },{
    value:"Résolu",
    label:"Résolu",
  }
];

// Yup.date()
//     .transform(function (value, originalValue) {
//       if (this.isType(value)) {
//         return value;
//       }
//       const result = parse(originalValue, "dd.MM.yyyy", new Date());
//       return result;
//     })
//     .typeError("please enter a valid date")
//     .required()
//     .min("1969-11-13", "Date is too early")

const ticketScheme = yup.object().shape({
  Titre : yup.string().required("required").max(50),
  Description : yup.string().required("required").max(150),
  DateCreation: yup.string(),
  // IdStatut : yup.number().required("required"),
  // IdPriorite : yup.number().required("required"),
  // IdUtilisateur : yup.number().required("required"),
  // IdCategorie :  yup.string().required("required"),

});

function CreateTicket() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isMobile = useMediaQuery("(min-width:600px)")
    const [defaultDate, setDefaultDate] = useState();

    // Get the current date and time using dayjs
    

    // Format the current date and time as "06/09/2023 19:44"
    useEffect(()=>{
      const now = dayjs();
      setDefaultDate(now.format('DD/MM/YYYY HH:mm'))
    },[])

    const initialValues = {
      Titre : "",
      Description : "",
      DateCreation : defaultDate,
      IdStatut : "Nouveau",
      IdPriorite : "Normal",
      IdUtilisateur : "",
      IdCategorie : "",
    };
    
    const handleFromSubmit = (values) =>{
      console.log(values);
    }

  return (
    <Box m="10px">
      <Header title="Tickets" subtitle="Création des Tickets" />
      <Box m="20px 0 0 0">
      <Typography
                variant="h3"
                color={colors.grey[100]}
                sx={{m:"5px 0 5px 20px"}}>
                    Crée un nouvel Tickets
        </Typography>

      <Formik 
          onSubmit={handleFromSubmit}
          initialValues={initialValues}
          validationSchema={ticketScheme}
          >
          {({values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
            <form onSubmit={handleSubmit}>
              <Box 
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(6, minmax(0, 1fr))" // Changed to have 2 columns
                sx={{
                  "& > div": { gridColumn: isMobile ? undefined : "span 6" }, // Set gridColumn to span 2 columns
                }}
                >
                  <TextField 
                    fullWidth
                    variant='filled'
                    type='text'
                    label="Titre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Titre} // Updated the value and name attributes
                    name='Titre' // Updated the name attribute to match the field name
                    error={!!touched.Titre && !!errors.Titre}
                    helperText={touched.Titre && errors.Titre}
                    sx={{gridColumn: "span 3"}}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DateTimePicker
                    fullWidth
                    variant='filled'
                    type='date'
                    label="Date de Création"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={dayjs(values.DateCreation)} // Convert to dayjs object
                    format="DD/MM/YYYY HH:mm"
                    name='DateCreation'
                    views={['year', 'day', 'hours', 'minutes']}
                    sx={{ gridColumn: "span 3" }}
                    disabled
                  />
                  </LocalizationProvider>
                   <TextField 
                    fullWidth
                    variant='filled'
                    type='text'
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Description} // Updated the value and name attributes
                    name='Description' // Updated the name attribute to match the field name
                    error={!!touched.Description && !!errors.Description}
                    helperText={touched.Description && errors.Description}
                    sx={{gridColumn: "span 6"}}
                  />
                  
                  <TextField
                  variant="filled"
                    id="IdCategorie"
                    select
                    label="Categorie"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.IdCategorie} 
                    
                    error={!!touched.IdCategorie && !!errors.IdCategorie}
                    helperText={touched.IdCategorie && errors.IdCategorie}
                    SelectProps={{
                      native: true,
                    }}
                    sx={{gridColumn: "span 2"}}
                  >
                    {categories.map((option) => (
                      <option  key={option.value} value={option.value} style={{backgroundColor:colors.praimary[400] ,color:colors.grey[100]}}>
                        {option.label}
                      </option>
                    ))}

                  </TextField>
                  <TextField
                    variant="filled"
                    color='praimary'
                    id="IdPriorite"
                    select
                    label="Priorite"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.IdPriorite} 
                    
                    error={!!touched.IdPriorite && !!errors.IdPriorite}
                    helperText={touched.IdPriorite && errors.IdPriorite}
                    SelectProps={{
                      native: true,
                    }}
                    sx={{gridColumn: "span 2"}}
                  >
                    {priorite.map((option) => (
                      <option color="praimary" key={option.value} value={option.value} style={{backgroundColor:colors.praimary[400] ,color:colors.grey[100]}}>
                        {option.label}
                      </option>
                    ))}

                  </TextField>
                  <TextField
                  variant="filled"
                    id="IdStatut"
                    select
                    label="Statut"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.IdStatut} 
                    
                    error={!!touched.IdStatut && !!errors.IdStatut}
                    helperText={touched.IdStatut && errors.IdStatut}
                    SelectProps={{
                      native: true,
                    }}
                    sx={{gridColumn: "span 2"}}
                  >
                    {statut.map((option) => (
                      <option key={option.value} value={option.value} style={{backgroundColor:colors.praimary[400] ,color:colors.grey[100]}}>
                        {option.label}
                      </option>
                    ))}

                  </TextField>
                  
                 
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                    <Button type='submit' color='secondary' variant='contained'>
                      Créer Ticket
                    </Button>
              </Box>
            </form>  

          )}
        </Formik>
      </Box>
    </Box> 
  )
}

export default CreateTicket