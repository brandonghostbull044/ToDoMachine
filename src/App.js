import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import React from 'react';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'tomar el curso de React.js', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'aaaaaaaa', completed: false }
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
