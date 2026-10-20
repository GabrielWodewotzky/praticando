import { useState } from 'react'
import LembreteCard from './pages/LembreteCard'
import type { lembreteProps } from './pages/LembreteCard'

const App = () => {
  const [lembrete, setLembrete] = useState<lembreteProps[]>([
    { id: 1, name: 'reformar parede', tipo: 'Pessoal' },
    { id: 2, name: 'refazer planilha', tipo: 'Trabalho' },
    { id: 3, name: 'lavar louça', tipo: 'Pessoal' },
    { id: 4, name: 'subir deploy', tipo: 'Trabalho' }
  ])

  const [filtro, setFiltro] = useState<'Todos' | 'Trabalho' | 'Pessoal'>('Todos')



  const filtragem = lembrete.filter((obj) => {
    if (filtro === 'Todos') return true 
    return obj.tipo === filtro
})

  return (
    <div className='flex flex-col gap-4 p-6 items-center'>
      <h1 className='text-3xl font-bold text-blue-950'>Lista de Lembretes</h1>

      {/* Botões para alternar os filtros */}
      <div className='flex gap-2'>
        <button
          onClick={() => setFiltro('Todos')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${filtro === 'Todos' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro('Trabalho')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${filtro === 'Trabalho' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
        >
          Trabalho
        </button>
        <button
          onClick={() => setFiltro('Pessoal')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${filtro === 'Pessoal' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
        >
          Pessoal
        </button>
      </div>

      {/* Renders apenas a lista filtrada */}
      <div className='flex flex-col gap-4 w-full'>
        {filtragem.map((item) => (
          <LembreteCard key={item.id} lembrete={item} />
        ))}
      </div>
    </div>
  )
}

export default App