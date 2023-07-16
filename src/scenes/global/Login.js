import React ,{ useState } from 'react'
import { Button, Container, TextField, Typography, Box, useTheme} from '@mui/material';
import { tokens } from '../../theme';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Grid from '@mui/material/Grid';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleLogin = (e) => {
      // Handle login logic here
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
    };
    
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
        <form onSubmit={handleLogin}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              type="email"
              label="E-mail"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="password"
              label="Mot de Passe"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                        <LockRoundedIcon/>
                    </InputAdornment>
                )
              }}
            />
            <Button type="submit" variant="contained" color='secondary'>
              Login
            </Button>
          </Box>
        </form>
      </Box>
  </Grid>
</Grid>
    
    
  )
}

export default Login