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
  return(
    <ThemeProvider theme={themeFalabella}>
      <div>
        <Grid container spacing={2} justify='center' alignItems="center" direction="column" sx={{minWidth: 300, mt: '8rem'}}>
          <img src={BancoFalabella} alt='Logo Falabella' ></img>
          <Typography variant="h4" component="h3" color='primary' sx={{mt: '4rem'}}>
            Bienvenido de vuelta
          </Typography>
          <TextField id="outlined-basic" size="small" label="Usuario" variant="filled" sx={{ mt: '2rem', mx: 'auto', width: '30%', minWidth: 100}}/>
          <TextField id="outlined-basic" size="small" label="Contraseña" variant="filled" sx={{ borderRadius: '50%', mt: '2rem', width: '30%'}}/>
          <Button variant="contained" color="primary" sx={{mt: '2rem'}}>Iniciar sesión</Button>
        </Grid>
      </div>
    </ThemeProvider>
    
  )
}