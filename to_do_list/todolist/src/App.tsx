import { useState } from 'react'
import Logo from './assets/Logo.svg'
import './App.module.css'

function App() {
  return (
    <div className="App">
      <header>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={Logo} className="logo todo" alt="Todo logo" />
        </a>
      </div>
      </header>
      <body>      
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </body>
    </div>
  )
}

export default App
