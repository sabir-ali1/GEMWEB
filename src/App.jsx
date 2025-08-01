import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navabr from './component/Navabr'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navabr/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App