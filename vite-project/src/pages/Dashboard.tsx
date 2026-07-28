import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Dashboard = () => {

const navigate = useNavigate()


const Voltar = () => {
    navigate(-1)
}



  return (
    <div>
        <h1>Dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit aut fugiat reiciendis minima ut illum laudantium. Consectetur optio enim veniam, quas eveniet magni sapiente dicta, laborum tempore quis at?</p>
        <button onClick={Voltar}>voltar </button>
    </div>



  )
}

export default Dashboard