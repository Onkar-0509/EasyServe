import React from 'react'
import { Routes, Route} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from './Components/Login'

const App = () => {

  return (
    <div>
      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      </Routes>
      
    </div>
  )
}

export default App
