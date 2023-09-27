import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lime, green } from '@mui/material/colors';
import BancoFalabella from '../img/BancoFalabella.png';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const themeFalabella = createTheme({
  palette: {
    primary:{
      main: '#007933',
      light: '#1DB51A',
      dark: '#045835'
    },
    secondary: {
      main: '#C2D402',
      light: '#EBEF20',
      dark: '#7DB409'
    }
  }
})



export default function Logger(){

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return(
    <ThemeProvider theme={themeFalabella}>
      <div>
        <Grid container spacing={2} justify='center' alignItems="center" direction="column" sx={{minWidth: 300, mt: '4rem'}}>
          <img src={BancoFalabella} alt='Logo Falabella' ></img>
          <Typography variant="h4" component="h3" color='primary' sx={{mt: '4rem'}}>
            Bienvenido de vuelta
          </Typography>
          <TextField id="outlined-basic" size="small" label="Usuario" variant="filled" sx={{ mt: '2rem', mx: 'auto', width: '30%', minWidth: 100}}/>
          
          <FormControl sx={{ m: 1, width: '30%', mt: '2rem' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
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
          />
        </FormControl>
        <Button variant="contained" color="primary" sx={{mt: '2rem'}}>Iniciar sesión</Button>
        </Grid>
      </div>
    </ThemeProvider>
    
  )
}