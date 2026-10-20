export interface lembreteProps {
    id: number
    name: string
    tipo: 'Pessoal' | 'Trabalho'
}

type LembreteCardProps = {
    lembrete: lembreteProps
}

const LembreteCard = ({ lembrete }: LembreteCardProps) => {
    return (
      
        <div className="bg-blue-200 w-fit p-6 shadow-md mx-auto rounded-full">
            <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold">{lembrete.name}</h3>
                <p className="font-black text-xl text-black">Seu ID: #{lembrete.id}</p>
                <p className={` text-white ${lembrete.tipo === 'Pessoal' ? 'bg-red-500' : 'bg-blue-500' }`}>{lembrete.tipo}</p>
            </div>
        </div>
    )
}
export default LembreteCard