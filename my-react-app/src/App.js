import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//import pages
import Home from "./pages/Home";
import LoginP from "./pages/LoginP";
import Social from "./pages/Social";

//import components
import Navbar from "./Components/navbar";
import Logger from "./pages/Logger";
import TestC from "./pages/TestC";
import BottomNav from "./Components/BottomNav";
import imagenFondo from "./img/bgHome.png";

const themeFalabella = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  }
});

function App() {
  const estiloDeContenedor = {
    width: "619px",
    height: "1289px",
    margin: "0 auto", // Centra el contenedor horizontalmente
    position: "relative", // Permite que los elementos absolutos se posicionen correctamente
  };

  const estiloDeFondo = {
    backgroundImage: `url(${imagenFondo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    width: "100%", // Asegura que la imagen cubra todo el contenedor
    height: "100%", // Asegura que la imagen cubra todo el contenedor
    position: "absolute", // Permite que la imagen ocupe todo el contenedor
  };

  const estiloDeMascara = {
    backgroundColor: "rgba(87, 60, 43, 0.92)", // Color de fondo con transparencia
    width: "100%",
    height: "100%",
    position: "absolute",
  };

  return (
    <div style={estiloDeFondo}>
      <div style={estiloDeMascara}>
        <ThemeProvider theme={themeFalabella}>
          <main>
            <div className="App-bg">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="logger" element={<Logger />} />
                <Route path="testC" element={<TestC />} />
                <Route path="social" element={<Social />} />
              </Routes>
            </div>
          </main>
        </ThemeProvider>
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
