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
    <main>
    <div>
      <label className="textform">Lista:</label>
        <input type="text" className="form-control" id="name" name="name" required/>
    </div>
    <form className="formlist">
      <div className="form-group">
      <label className="textform">Nombre:</label>
        <input type="text" className="form-control" id="name" name="name" required/>
    </div>
    <div className="form-group">
      <label className="textform">Apellido1:</label>
        <input type="text" className="form-control" id="name" name="name" required/>
    </div>
    <div className="form-group">
      <label className="textform">Apellido2:</label>
        <input type="text" className="form-control" id="name" name="name" required/>
    </div>
    <div className="form-group">
      <label className="textform">Email contacto:</label>
        <input type="text" className="form-control" id="name" name="name" required/>
    </div>
    <div className="form-group">
      <label className="textform">Teléfono:</label>
        <input type="text" className="form-control" id="name" name="name" required/>
    </div>

    <button className="buttonform">Eliminar</button>

    </form>
   </main>

  
    </>
  );
}

export default App;
