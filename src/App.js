import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de React.js', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Aaa', completed: true },
  { text: 'Aaaaaaaa', completed: false },
  { text: 'Aaaaaa', completed: false },
  { text: 'Aaaaaaa', completed: false },
  { text: 'Aaaa', completed: false },
  { text: 'Aaaaa', completed: false }
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <CreateTodoButtom />

      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
    </>
  );
}

export default App;
