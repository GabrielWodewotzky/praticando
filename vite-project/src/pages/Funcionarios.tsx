import { useState } from "react"

type Funcionario = {
  id: number
  nome: string
  cargo: string
  salario: number
}

const Funcionarios = () => {

const [funcionarios, setFuncionarios] = useState<Funcionario[]>([
    {id: 1, nome: 'vitor', cargo: 'analisata', salario: 25000}
])


const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [salario, setSalario] = useState(0)

const [editando, setEditando] = useState<number | null>(null)


const AdicionarFuncionario = () => {
    if (!nome || !cargo || !salario) return

    const novo: Funcionario = {
        id: Date.now(),
        nome,
        cargo,
        salario,
    }

    setFuncionarios([...funcionarios, novo])
    setNome('')
    setCargo('')
    setSalario(0)
}


const RemoverFuncionario = (Id: number) => {
    setFuncionarios(funcionarios.filter(funcionario => funcionario.id !== Id))
}

const EditarFuncionario = (funcionario: Funcionario) => {
    setNome(funcionario.nome)
    setCargo(funcionario.cargo)
    setSalario(funcionario.salario)
    setEditando(funcionario.id)
}

const SalvarEdit = (IDeditado: number) => {
    const atualizado = funcionarios.map((func) =>
        func.id === IDeditado ? { ...func, nome, cargo, salario } : func
    )

    setFuncionarios(atualizado)
    setEditando(null)
    setNome('')
    setCargo('')
    setSalario(0)
}




  return (
    <div>
        <h1>lista de funcionarios atuais</h1>

            <input placeholder="digite o nome do colaborador" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input placeholder="digite o cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
            <input placeholder="digite o salario" value={salario} onChange={(e) => setSalario(Number(e.target.value))} />
            <button onClick={AdicionarFuncionario}>adicionar</button>

            <ul>
                {funcionarios.map((funcionario) => (
                    <li key={funcionario.id}>
                        {funcionario.nome} - {funcionario.cargo} - {funcionario.salario}
                        <button onClick={() => RemoverFuncionario(funcionario.id)}>remover</button>
                                <button onClick={() => EditarFuncionario(funcionario)}>editar</button>
                                 {editando === funcionario.id ? (
                                <button onClick={() => SalvarEdit(funcionario.id)}>Salvar edição</button> ) : null}
                        
                    </li>
                ))}

                
            </ul>
    </div>
  )
}

export default Funcionarios