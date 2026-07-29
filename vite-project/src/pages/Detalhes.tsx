import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Detalhes = () => {

const navigate = useNavigate()
const retornar = () => {
    navigate(-1)
}

const retornarHome = () => {
    navigate('/home')
}
const {id} = useParams()

  return (
    <div>
        <h1>Id do funcionario acessado: </h1>
        <h1>id: {id}</h1>

        <button onClick={retornar}>voltar</button>
        <button onClick={retornarHome}>ir para o inicio</button>

    </div>
  )
}

export default Detalhes