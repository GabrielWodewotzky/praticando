import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {

const navigate = useNavigate()



const Voltar = () => {
    navigate("/dashboard")
}


  return (
    <div>
        <h1>pagina nao encontrada</h1>
        <p>oque voce acessou nao existe</p>
        <button onClick={Voltar}>voltar</button>
        
    </div>
  )
}

export default NotFound