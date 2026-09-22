interface TodoItemProps {
    text: string 
    index?: number
    onDelete?: (id: number) => void 
}

const TodoItem = ({text, index, onDelete}: TodoItemProps) => {
  return (
    <div className="bg-blue-300 m-6 p-7 items-center flex flex-col gap-5 ">
        <p className="text-white max-w-3xs bg-purple-500 font-sans font text-5xl rounded-2xl flex flex-col items-center w-full border-4 border-blue-500">{text}</p>
          <p className="text-white max-w-3xs bg-purple-500 font-sans font text-5xl rounded-2xl flex flex-col items-center w-full border-4 border-blue-500">{text}</p>
          <p className="text-white max-w-3xs bg-purple-500 font-sans font text-2xl rounded-2xl flex flex-col items-center w-full border-4 border-blue-500">{text}</p>
        <button className="bg-red-600 text-white rounded-4xl p-1 border-2 border-white">excluir</button>
    </div>
  )
}

export default TodoItem