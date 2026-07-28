import React from 'react'
import { useNavigate } from 'react-router-dom'

const Produtos = () => {

 const Produtos = ['maça', 'pera', 'banana']   

 const navigate = useNavigate()
 

 const Voltar = () => {
    navigate('/')
 }

  return (
    <div>
        {Produtos.map((produto) => (
            <p>{produto}</p>
        ))}

        <button onClick={Voltar}>voltar</button>
    </div>
  )
}

export default Produtos