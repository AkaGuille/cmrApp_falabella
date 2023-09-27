import logo from "./logo.svg";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

//import pages
import Home from './pages/Home';
import LoginP from './pages/LoginP';

const themeFalabella = createTheme({
  palette: {
    primary: {
      main:'#fefefe'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={themeFalabella}>
      <main>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='loginP' element={<LoginP />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
