import logo from "./logo.svg";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="iniciar-sesin">
        <div className="div">
          <div className="sesion-button">
            <div className="overlap-group">
              <div className="text-wrapper">Iniciar Sesión</div>
            </div>
          </div>
          <div className="text-wrapper-2">¿Olvidaste tu contraseña?</div>
          <div className="contrasea-button">
            <div className="overlap">
              <div className="text-wrapper-3">Contraseña</div>
              <img
                className="iconsax-bold"
                alt="Iconsax bold"
                src="eyeslash.svg"
              />
            </div>
          </div>
          <div className="email-button">
            <div className="overlap">
              <div className="text-wrapper-3">Correo Electrónico</div>
            </div>
          </div>
          <div className="text-wrapper-4">¡Bienvenido de vuelta!</div>
          <img
            className="banco-falabella"
            alt="Banco falabella"
            src="../public/banco-falabella.png"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
