import { useState } from 'react'
import ActionCard from './pages/ActionCard'
import NameUser from './pages/NameUser'





const App = () => {

const [mensagem, setMensagem] = useState<string>('verificar')
const [mensagemRecusada, setMensagemRecusada] = useState<string>('verificar')

 const handleAprovar = () => {
  setMensagem('Mensagem aprovada!')
}

const handleBloquear = () => {
  setMensagemRecusada('Mensagem negada!')
}


  return (
    <div className='text-white font-serif'>
        <NameUser nome='Gabriel' />
        <ActionCard title='aprovar' onAction={handleAprovar} mensagem={mensagem}  />
        <ActionCard title='recusar' onAction={handleBloquear} mensagem={mensagemRecusada} />
        
    </div>
  )
}

export default App

