import React, { useState } from 'react'
import DespesaCard, { type Despesas } from './pages/DespesaCard'

const App = () => {

const [despesas, setDespesas] = useState<Despesas[]>([{
  categoria: 'diaria', descricao: 'gastos do dia a dia', id: 1, valor: 250
}, {id: 2, categoria: 'investimentos', descricao: 'dinheiro para investir', valor: 1000}])

const AumentarValorDespesas = (id: number) => {
  setDespesas((despesas) => despesas.map((d) => d.id === id ? {...d, valor: d.valor + 10} : d))
}


const calcularTotal = () => {
  return despesas.reduce((acc, despesa) => acc + despesa.valor, 0)
}


  return (
    <div className='flex flex-col items-center gap-1.5'>
      <h1 className='text-white font-bold text-3xl'>lista de despesas</h1>
      <p className='bg-red-400 text-2xl text-white rounded-3xl w-fit p-3'>despesas atuais</p>
      <p className=''>soma total: {calcularTotal()}</p>
    <div className='flex flex-col gap-5'>
       {despesas.map((despesas) => (
          <DespesaCard
              key={despesas.id}
              despesas={despesas}
              onAumentarValor={AumentarValorDespesas}
           />
       ))}
    </div>
    </div>
  )
}

export default App