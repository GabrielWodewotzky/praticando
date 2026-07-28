import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  const entrar = () => {

    if(email && senha){
      navigate("/dashboard")
    }

  }


  return (
    <div>

      <h1>Bem vindo</h1>

      <input
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />


      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />


      <button onClick={entrar}>
        Entrar
      </button>

    </div>
  )
}

export default Login