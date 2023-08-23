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
  const [slider, setSlider] = React.useState(1);
  const [sliderTodos, setSliderTodos] = React.useState(todos);
  const completedTodosLength = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;
  const searchedTodos = sliderTodos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    if (todos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    switch (slider) {
      case 2:
        filtredSC();
        break;
      case 3:
        filtredC();
        break;
      default:
        setTodos(newTodos); 
    }
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    switch (slider) {
      case 2:
        const new2Todos = newTodos.filter(todo => !todo.completed);
        setSliderTodos(new2Todos);
        console.log(new2Todos);
        console.log('funciona el filtredsc');
        break;
      case 3:
        const new3Todos = newTodos.filter(todo => todo.completed);
        setSliderTodos(new3Todos);
        console.log(new3Todos);
        console.log('funciona el filtredsc');
        break;
      default:
        setSliderTodos(newTodos);
        break;
    }
  };
  const filtredT = (text) => {
    const newTodos = [...todos];
    setSlider(1);
    setSliderTodos(newTodos);
  };
  const filtredSC = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setSlider(2);
    setSliderTodos(newTodos);
  };
  const filtredC = () => {
    const newTodos = todos.filter(todo => todo.completed);
    setSlider(3);
    setSliderTodos(newTodos);
  };
  

  return (
    <>
      <TodoCounter completed={completedTodosLength} total={totalTodos} />
      <CreateTodoButtom />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList filterT={filtredT} filterC={filtredC} filterSC={filtredSC}>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} delete={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList>
    </>
  );
}

export default App;
