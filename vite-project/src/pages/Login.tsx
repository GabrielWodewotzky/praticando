import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const [input, setInput] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate()

const Entrar = () => {
    navigate('/home')
}


  return (
    <div>
        <h2>bem vindo</h2>
        <input  placeholder='digite seu nome' value={input} onChange={(e) => setInput(e.target.value)}/>
        <input placeholder='digite a senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={Entrar}>entrar</button> 
    </div>
  )
}

export default Login