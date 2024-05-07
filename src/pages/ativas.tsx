import { useState } from 'react';
import Link from "next/link"
import Head from 'next/head';

interface TodoItem {
  task: string;
  done: boolean;

}

export default function Ativas() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [inputValue, setInputValue] = useState("");
  
    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, { task: inputValue, done: false }]);
        setInputValue('');
      }
    };
  
    const handleToggleTodo = (index: number) => {
      const updatedTodos = [...todos];
      updatedTodos[index].done = !updatedTodos[index].done;
      setTodos(updatedTodos);
    };
  
  
    return (
      <>
      <Head>
        <title>PraFazê | Ativas</title>
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
            <p> () Itens restantes</p>
          </div>
          <div className='mr-5'>
            <Link href="/">Tudo</Link>
          </div>
          <div className='mr-5'>
            <Link href="/ativas">Ativas</Link>
          </div>
          <div className='mr-14'>
            <Link href="/completas">Completas</Link>
          </div>
          <div className='mr-4'>
            <p>Limpar completas</p>
          </div>
        </div>
      </div>
      </>
    );
  }