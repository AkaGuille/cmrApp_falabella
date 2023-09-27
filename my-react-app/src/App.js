import logo from "./logo.svg";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

//import pages
import Home from './pages/Home';
import LoginP from './pages/LoginP';

//import components
import Navbar from "./Components/navbar";
import Logger from "./pages/Logger";
import TestC from "./pages/TestC";
import BottomNav from "./Components/BottomNav";

const themeFalabella = createTheme({
  palette: {
    primary: {
      main:'#fefefe'
    }
  }
})

function App() {
  return (
    <>
      
      <ThemeProvider theme={themeFalabella} >
        <main>
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='logger' element={<Logger />} />
            <Route path ='testC' element={<TestC />} />
          </Routes>
        </main>
      </ThemeProvider>
      <BottomNav/>
    </>
  );
}

export default App;
