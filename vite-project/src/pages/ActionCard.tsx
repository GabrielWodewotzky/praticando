interface ActionCardProps {
  title: string  
  onAction: () => void 
  mensagem: string
}

const ActionCard = ({title, onAction, mensagem}: ActionCardProps) => {
  return (
    <div className="flex flex-col items-center bg-gray-400 rounded-2xl gap-2">
        <h1>{title}</h1>
        <button className="bg-blue-600 rounded-xl text-white py-4 px-2 hover:bg-blue-900 transition-colors" onClick={onAction}>clique aqui</button>
        <p>{mensagem}</p>
    </div>
  )
}

export default ActionCard