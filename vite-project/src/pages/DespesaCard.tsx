export interface Despesas {
    id: number 
    categoria: string
    descricao: string
    valor: number
}


type DespesasProps = {
    despesas: Despesas
    onAumentarValor: (id: number) => void 
} 






const DespesaCard = ({despesas, onAumentarValor}: DespesasProps) => {
  return (
    
    <div className="flex flex-col gap-4">
    <div className="flex flex-col items-center gap-3 p-3 bg-gray-900 w-fit mx-auto">
        <p className="text-white">{despesas.categoria}</p>
        <p className="text-white">{despesas.descricao}</p>
        <p className="text-red-400 text-shadow-2xs">{despesas.valor}</p>
        <button className="bg-red-900 text-white px-5 border-2 rounded-full hover:bg-red-600 w-fit" onClick={() => onAumentarValor(despesas.id)}>aumentar valor</button>
      </div>  
    </div>



  )
}

export default DespesaCard


