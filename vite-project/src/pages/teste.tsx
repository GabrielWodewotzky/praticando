export interface Produto {
  id: number;
  nome: string;
  qtd: number;
}


interface Props {
  produto: Produto;
  onAdicionar: (id: number) => void;
}

const ItemCarrinho = ({ produto, onAdicionar }: Props) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow w-80">
      <div>
        <h4 className="font-bold">{produto.nome}</h4>
        <p className="text-gray-500">Qtd: {produto.qtd}</p>
      </div>
      <button 
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={() => onAdicionar(produto.id)}
      >
        +1
      </button>
    </div>
  );
};

export default ItemCarrinho;