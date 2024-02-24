import './App.css';
import Accordian from './components/Accordian';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#122430'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#f4eded'
      showAlert("Light mode has been enabled", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Textform showAlert={showAlert} mode={mode} />
      <Accordian mode={mode} />
    </>
  );
}

export default App;
