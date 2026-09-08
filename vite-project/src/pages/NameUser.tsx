interface Name {
  nome: string;
}

const NameUser = ({ nome }: Name) => {
  return (
    /* p-4 aplica padding interno para a faixa azul abraçar o texto */
    <div className="bg-blue-700 p-4 text-white text-center rounded-t-xl">
      {/* text-lg ajusta a fonte para um tamanho agradável e font-sans padroniza a tipografia */}
      <h1 className="text-lg font-medium font-sans">
        Bem-vindo, {nome}! O que deseja fazer hoje?
      </h1>
    </div>
  );
};

export default NameUser;