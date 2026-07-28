
import React from 'react'
import { Link, Route, Routes, useRoutes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const App = () => {


  return (
    <div>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>

        <Link to="/login">login</Link> | {" "}
        <Link to="/dashboard">dashboard</Link> | {" "}
        

    </div>
  )
}

export default App