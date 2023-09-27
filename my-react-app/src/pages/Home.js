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
import CMRFalabella from '../img/CMRFalabella.png'
import PaymentsIcon from '@mui/icons-material/Payments';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


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
        <Box sx={{width:300,height: 200, backgroundColor: 'primary.main', borderRadius:5}} >
          <img src={CMRFalabella} alt='Logo CMR' width={100}></img>
          <Typography variant="h6">
            12.500 puntos
          </Typography>
          <Typography variant="h8">
            3141  5926  5358  9793
          </Typography>
        </Box>
        <section> 
          <Button variant="contained" color="primary">
            <PaymentsIcon />
          </Button>
          <Button variant="contained" color="primary">
            <AttachMoneyIcon  />
          </Button>
          <Button variant="contained" color="primary">
            <MoreHorizIcon  />
          </Button>
        </section>

        <Typography variant="h8">
            Cantidad redimible en pesos
        </Typography>
        <Typography variant="h6">
            1.000.000 $
        </Typography>

        <Box sx={{width:300,height: 100, backgroundColor: 'primary.main', borderRadius:5}} >
          <div>
            <Typography variant="h7">
                Tienda CMR 
            </Typography>
          </div>

          <div>
            <Typography variant="h8">
                Pago de producto individual
            </Typography>
          </div>

          <div>
            <Typography variant="h9">
                4511  5626  5358  9593
            </Typography>
          </div>
        </Box>

        <Box sx={{width:300,height: 100, backgroundColor: 'primary.main', borderRadius:5}} >
          <div>
            <Typography variant="h7">
                Tienda CMR 
            </Typography>
          </div>

          <div>
            <Typography variant="h8">
                Pago de producto colectivo
            </Typography>
          </div>

          <div>
            <Typography variant="h9">
                4511  5626  5358  9593
            </Typography>
          </div>
        </Box>

        </Grid>
      </div>
    </ThemeProvider>
    
  )
}