import './App.css';
import Accordian from './components/Accordian';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#122430'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#f4eded'
    }
  }
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Textform mode={mode} />
      <Accordian mode={mode} />
    </>
  );
}

export default App;
