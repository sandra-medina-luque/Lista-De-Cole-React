import { useState } from 'react'
import logo from './assets/img/logo.png'
import Prefer from './assets/img/Prefer.svg'
import './app.css'


function App() {

  return (
    <>
    <nav>
    <img className="logo" src={logo} alt="logo" />
    <button className="buttonnav">+Lista</button>
    <button className="buttonnav">Editar</button>
    <button className="buttonnav">Eliminar</button>
    <img classname="prefer" src={Prefer} alt="prefer" />
    </nav>

  
    </>
  );
}

export default App;
