import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App
