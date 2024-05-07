import { useState } from 'react';
import Head from 'next/head';

interface TodoItem {
  task: string;
  done: boolean;

}

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [allTodos, setAllTodos] = useState<TodoItem[]>([]);


  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = { task: inputValue, done: false };
      setTodos([...todos, newTodo]);
      setAllTodos([...allTodos, newTodo]);
      setInputValue('');
    }
  };
    
  const handleToggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
      };

  const mostrarTodas = () => {
    setTodos(allTodos);
   }

   const mostrarAtivas = () => {
    setTodos(todos.filter(todo => !todo.done));
    };
  const mostrarCompletas = () => {
    setTodos(todos.filter(todo => todo.done));
    }; 
  const limparTarefas = () => {
    const tarefasAtivas = todos.filter(todo => !todo.done);
    setTodos(tarefasAtivas);
    };
  const todosRestantes = todos.filter(todo => !todo.done).length;
  
   return (
    <>
    <Head>
      <title>PraFazê | Tudo </title>
    </Head>
    <h1 className=''>PraFazê</h1>
    <div className='border-solid border-2 border-black px-4 py-4 rounded-lg'>
      <input
        className=' border-2 rounded-lg  py-1.5 pr-72 border-solid border-2 border-black'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="   Sou uma tarefa :)"
      />
    <button className='ml-4 py-2 px-2 bg-black text-white rounded-lg' onClick={handleAddTodo}> Adicionar </button>
    <ul className='pt-2'>
      {todos.map((todo, index) => (
      <li key={index} className='pt-2'>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => handleToggleTodo(index)}
          className="h-4 w-8"
          />
        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
          {todo.task}
        </span>
      </li>
      ))}
    </ul>
      <div className='flex pt-14'>
        <div className='mr-14'>
          <p> {todosRestantes} Itens restantes</p>
        </div>
        <div className='mr-5'>
        <button onClick={mostrarTodas}>Todas</button>
        </div>
        <div className='mr-5'>
          <button onClick={mostrarAtivas}>Ativas</button>
        </div>
        <div className='mr-14'>
        <button onClick={mostrarCompletas}>Completas</button>
        </div>
        <div className='mr-4'>
        <button onClick={limparTarefas}>Limpar completas</button>
        </div>
      </div>
    </div>
    </>
  );
}