import { useState } from "react"

type Produto = {
  id: number
  nome: string
  preco: number
  categoria: string
  estoque?: number
}




const Produtos = () => {


const [produtos, setProdutos] = useState<Produto[]>([])

const [nome, setNome] = useState('')
const [preco, setPreco] = useState(0)
const [categoria, setCategoria] = useState('')


const [edit, setEdit] = useState<null | number>(null)


const AdicionarProduto = () => {

    if(!nome || !preco || !categoria) return alert('preencha todos os campos necessarios')



const adicionar: Produto = {
    id: Date.now(),
    nome: nome,
    preco: preco,
    categoria: categoria
}

setProdutos([...produtos, adicionar])

setNome('')
setCategoria('')
setPreco(0)

}


const Editar = (produto: Produto) => {
   setNome(produto.nome)
   setCategoria(produto.categoria)
   setPreco(produto.preco)
   setEdit(null)
}


const SalvarEditar = (salvar: number ) => {

    const atualizado = produtos.map((produto) => (
        produto.id === salvar ? {...produto, nome, categoria, preco} : produto
    ))


setEdit(null)
setNome('')
setPreco(0)
setCategoria('')

}






const Remover = (id: number) => {
    setProdutos(produtos.filter(prod => prod.id !== id))
}





  return (
    <div>
        <h1>bem vindos a nossoa loja</h1>
        <input placeholder="digite o nome do produto" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder="digite o preco" value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
        <input placeholder="digite o nome da cateogria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        <button onClick={AdicionarProduto}>adicionar Produto</button>

       <div>
             <ul>
            {produtos.map((produto) => (
                <li key={produto.id}>
                    {produto.nome} - {produto.preco} - {produto.categoria}
                    <button onClick={() => Remover(produto.id)}>remover produto</button>
                    <button onClick={() => Editar(produto)}>editar</button>
                    <button onClick={() => SalvarEditar(produto.id)}>salvar ediçao</button>

                </li>
                
            ))}


        </ul>
       </div>
    </div>
  )
}

export default Produtos