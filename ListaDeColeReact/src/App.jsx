import { useState } from 'react'
import logo from './assets/img/logo.png'
import Prefer from './assets/img/Prefer.svg'
import './app.css'


function App() {

  return (
    <>
    <nav>
    <img className="logo" src={logo} alt="logo" />
    <button>+Lista</button>
    <button>+Lista</button>
    <button>+Lista</button>
    <img src={Prefer} alt="prefer" />
    </nav>
  
    </>
  );
}

export default App;
