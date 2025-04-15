import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/login' 
import Signup from './components/signup' 
import Home from './components/home' 
import Timings from './components/timings'

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/timings" element={<Timings />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App
