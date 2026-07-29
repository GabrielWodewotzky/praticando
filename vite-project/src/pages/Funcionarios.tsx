import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


type Funcionarios = {
    id : number
    nome: string
    idade: number
}





const Funcionarios = () => {

const navigate = useNavigate()

const Acessar = (id: number) => {
    navigate(`/detalhes/${id}`)
}

const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([{id: 1, nome: 'thiago', idade: 18}, {id: 2, nome: 'elais', idade: 24}, { id: 3, nome: 'fabio', idade: 34}])

  return (
    <div>{funcionarios.map((f, id) => (
        <div key={f.id} >
        <p>Id: {f.id} - {f.nome} - {f.idade}</p>
        <button onClick={() => Acessar(f.id)}>acessar detalhes</button>
        </div>
    ))}</div>


  )
}

export default Funcionarios