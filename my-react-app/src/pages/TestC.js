import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lime, green } from '@mui/material/colors';
import shop1 from '../img/shop1.jpg';
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


export default function Home(){
  return(
    <ThemeProvider theme={themeFalabella}>
      <div>
        <Grid container spacing={2} justify='center' alignItems="center" direction="column" sx={{minWidth: 300, mt: '8rem'}}>
        <Box sx={{width:300,height: 150, backgroundColor: 'primary.main', borderRadius:5}} >
          <img src={shop1}  width={100}></img>
        </Box>
        <Typography>Categorías</Typography>
        
        <section>
          <circle></circle>
        </section>



        </Grid>
      </div>
    </ThemeProvider>
    
  )
}