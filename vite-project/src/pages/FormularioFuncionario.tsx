import React, { useState } from 'react'


type Funcionario = {
  id: number 
  nome: string
  idade: number
  cargo: string
  salario: number
}


const FormularioFuncionario = () => {


const [funcionario, setFuncionario] = useState<Funcionario>({
  id: Date.now(),
  nome: '',
  idade: 0,
  cargo: '',
  salario: 0

 
})


const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])

const [editando, setEditando] = useState<number | null>(null)




const SalvarInfo = () => {

if (
  funcionario.nome === '' || funcionario.idade === 0 || funcionario.cargo === '' || funcionario.salario === 0 
) {
  alert ('campos invalidos')
  return
}

  setFuncionarios([...funcionarios, funcionario])

  setFuncionario({
    id: Date.now(),
    nome: '',
    idade: 0,
    cargo: '',
    salario: 0,
  })
}



const removerUser = (id: number) => {
  setFuncionarios(funcionarios.filter(f => f.id !== id))
}


const editarFuncionario = (id: number) => {

  const funcionarioSelecionado = funcionarios.find(
    f => f.id === id
  )

  if (!funcionarioSelecionado) {
    return
  }

  setFuncionario(funcionarioSelecionado)

  setEditando(id)
}


  return (
    <div>
        <input
          placeholder='digite seu nome'
          value={funcionario.nome}
          onChange={(e) => setFuncionario({ ...funcionario, nome: e.target.value })}
        />
        <input
          placeholder='digite sua idade '
          value={funcionario.idade}
          onChange={(e) => setFuncionario({ ...funcionario, idade: Number(e.target.value )})}
        />
        <input
          placeholder='digite seu cargo'
          value={funcionario.cargo}
          onChange={(e) => setFuncionario({ ...funcionario, cargo: e.target.value })}
        />
        <input
          placeholder='digite seu salario'
          value={funcionario.salario}
          onChange={(e) => setFuncionario({ ...funcionario, salario: Number(e.target.value )})}
        />

        <button onClick={SalvarInfo}>enviar informaçoes</button>

{funcionarios.map((funcionario, index) => (
  <div key={index}>
    <p>Nome: {funcionario.nome}</p>
    <p>Idade: {funcionario.idade}</p>
    <p>Cargo: {funcionario.cargo}</p>
    <p>Salário: {funcionario.salario}</p>
    <button onClick={() => removerUser(funcionario.id)}>remover</button>
    <button onClick={() => editarFuncionario(funcionario.id)}>editar</button>
  </div>

))}
        

    </div>
  )
}

export default FormularioFuncionario
