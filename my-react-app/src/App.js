import logo from "./logo.svg";
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import Home from './pages/Home';
import LoginP from './pages/LoginP';


function App() {
  return (
      <main>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='loginP' element={<LoginP />} />
        </Routes>
      </main>
  );
}

export default App;
