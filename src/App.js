import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Textform />
    </>
  );
}

export default App;
