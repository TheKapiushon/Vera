import './App.css'
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Card from './components/Card'
import Header from './components/Header'
import Detail from './components/Detail'
import Navbar from './components/Navbar'
import useFetch from './Hooks/Fetch'
import Welcome from './components/Welcome'

function App() {

  // Hooks
  const [welcome, setWelcome] = useState(true)

  useEffect(() => {
    const hasStarted = localStorage.getItem('hasStarted');
    if (hasStarted) {
      setWelcome(false)
    }
  }, []);

  // Variables
  let art;
  art = useFetch("https://fakestoreapi.com/products")

  // Functions
  const handleWelcome = () => {
    localStorage.setItem('hasStarted', 'true');
    setWelcome(false);
  }

  return (
    <>
      {
        welcome ? <Welcome
          onWelcome={handleWelcome} /> : <>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Card art={art} />}></Route>
              <Route path='/:id' element={<Detail />}></Route>
            </Routes>
          </BrowserRouter >
        </>
      }
    </>
  )
}

export default App
