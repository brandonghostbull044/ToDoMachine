import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import { SwitchMode } from './switchMode';
import React from 'react';

var defaultTodos = [
  
];

function App() {
  const slider_1 = document.querySelector('#slider_1');
  const slider_2 = document.querySelector('#slider_2');
  const slider_3 = document.querySelector('#slider_3');
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [slider, setSlider] = React.useState(1);
  const [sliderTodos, setSliderTodos] = React.useState(todos);
  const [createValue, setCreateValue] = React.useState('');
  const [addClickState, setAddClickState] = React.useState(1);
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
    slider_2.classList.remove('focus_slider');
    slider_3.classList.remove('focus_slider');
    slider_1.classList.add('focus_slider');
    const newTodos = [...todos];
    setSlider(1);
    setSliderTodos(newTodos);
  };

  const filtredSC = () => {
    slider_3.classList.remove('focus_slider');
    slider_1.classList.remove('focus_slider');
    slider_2.classList.add('focus_slider');
    const newTodos = todos.filter(todo => !todo.completed);
    setSlider(2);
    setSliderTodos(newTodos);
  };

  const filtredC = () => {
    slider_2.classList.remove('focus_slider');
    slider_1.classList.remove('focus_slider');
    slider_3.classList.add('focus_slider');
    const newTodos = todos.filter(todo => todo.completed);
    setSlider(3);
    setSliderTodos(newTodos);
  };

  const addClick = () => {
    const inputAdder = document.querySelector('#inputAdder');
    
    if (addClickState == 1) {
      inputAdder.classList.remove('inactive');
      setAddClickState(2);
    } else {
      if (createValue != '') {
        if (!todos.some(e => e.text.toLocaleLowerCase() == createValue.toLocaleLowerCase())) {
          todos.push({text: createValue, completed: false});
          setTodos(todos);
        } else {
          alert('El ToDo ya está en tu lista');
        }
        
        switch (slider) {
          case 1: 
            filtredT();
            break;
          case 2:
            filtredSC();
            break;
          case 3:
            filtredC();
            break;
        } 
      } else {
        return;
      }
    }
    
    
  }

  const darkMode = () => {
    console.log('hOLA');
    const bodyItem = document.querySelector('#root');
    const switch_Mode = document.querySelector('.switch_Mode');
    const create_button = document.querySelector('#create_button');
    const todo_list_container = document.querySelector('.todo_list_container');
    const slider_1 = document.querySelector('#slider_1');
    const slider_2 = document.querySelector('#slider_2');
    const slider_3 = document.querySelector('#slider_3');
    bodyItem.classList.toggle('darkBackground');
    create_button.classList.toggle('darkBackground');
    switch_Mode.classList.toggle('darkButtom');
    slider_1.classList.toggle('darkBackground');
    slider_2.classList.toggle('darkBackground');
    slider_3.classList.toggle('darkBackground');
    todo_list_container.classList.toggle('darkShadow');
  }
  
  return (
    <>
      <TodoCounter completed={completedTodosLength} total={totalTodos} />
      <CreateTodoButtom searchValue={createValue} setCreateValue={setCreateValue} addClick={addClick} counter={addClickState}/>
      
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList filterT={filtredT} filterC={filtredC} filterSC={filtredSC}>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} delete={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList>

      <SwitchMode darkMode={darkMode}/>
    </>
  );
}

export default App;
