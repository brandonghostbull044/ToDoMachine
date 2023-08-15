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
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Busco ' + searchValue);

  const completedTodos = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    console.log(newTodos[todoIndex].completed);
    setTodos(newTodos);
  };
    
  

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <CreateTodoButtom />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}/>
        ))}
      </TodoList>
    </>
  );
}

export default App;
