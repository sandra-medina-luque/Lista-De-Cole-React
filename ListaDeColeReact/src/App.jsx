import { useState } from 'react'
import logo from './assets/img/logo.png'
import Prefer from './assets/img/Prefer.svg'
import './App.css'

function App() {

  return (
    <div className="cont">
      <div className="contentnav">
        <img className="logo" src={logo} alt="logo" />
        <button className="buttonnav" onClick={addList}>
          +Lista
        </button>
        <button className="buttonnav" onClick={editList}>
          Editar
        </button>
        <button className="buttonnav" onClick={deleteList}>
          Eliminar
        </button>
        <img className="prefer" src={Prefer} alt="prefer" />
      </div>
    </div>
  );
}

export default App;
