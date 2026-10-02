import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import SaludoPadre from './Components/SaludoPadre';
import PadreMatematicas from './Components/PadreMatematicas';
import Car from './Components/Coches/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Car marca="Audi" modelo="Q8" velocidadMaxima="240" aceleracion="25"/>
      <Car marca="Pontiac" modelo="FireBird" velocidadMaxima="240" aceleracion="40"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
