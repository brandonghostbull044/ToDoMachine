import React from "react";
import { useLocalStorage } from "./Custom Hooks";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const bodyItem = document.querySelector('#root');
    const switch_Mode = document.querySelector('.switch_Mode');
    const create_button = document.querySelector('.create_button');
    const todo_list_container = document.querySelector('.todo_list_container');
    const slider_1 = document.querySelector('#slider_1');
    const slider_2 = document.querySelector('#slider_2');
    const slider_3 = document.querySelector('#slider_3');
    const deleteButtomContainer = document.querySelector('.deleteButtomContainer');
    const headerTittle = document.querySelector('.headerTitle');
    const addContainer = document.querySelector('.add_Container');
    const searchInput = document.querySelector('.Search_input')
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODO_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [slider, setSlider] = React.useState(1);
    const [sliderTodos, setSliderTodos] = React.useState(todos);
    const [createValue, setCreateValue] = React.useState('');
    const [addClickState, setAddClickState] = React.useState(1);
    const totalTodos = todos.length;
    const searchedTodos = sliderTodos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    const completedTodosLenght = todos.filter(todo => todo.completed).length;
    
  
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
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
          saveTodos(newTodos); 
      }
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
      switch (slider) {
        case 2:
          const new2Todos = newTodos.filter(todo => !todo.completed);
          setSliderTodos(new2Todos);
          break;
        case 3:
          const new3Todos = newTodos.filter(todo => todo.completed);
          setSliderTodos(new3Todos);
          break;
        default:
          setSliderTodos(newTodos);
          break;
      }
    };
  
    const filtredT = () => {
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
        setAddClickState(2)
        
        if (createValue !== '') {
          if (!todos.some(e => e.text.toLocaleLowerCase() === createValue.toLocaleLowerCase())) {
            todos.push({text: createValue, completed: false});
            saveTodos(todos);
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
            default:
              filtredC();
              break;
          } 
        }
        const create_button = document.querySelector('.create_button');
          if (bodyItem.classList.contains('darkBackground')) {
            create_button.classList.add('darkBackground');
          }
    }
  
    const darkMode = () => {
      bodyItem.classList.toggle('darkBackground');
      create_button.classList.toggle('darkBackground');
      switch_Mode.classList.toggle('darkButtom');
      slider_1.classList.toggle('darkBackground');
      slider_2.classList.toggle('darkBackground');
      slider_3.classList.toggle('darkBackground');
      todo_list_container.classList.toggle('darkShadow');
      deleteButtomContainer.classList.toggle('darkShadow2');
      headerTittle.classList.toggle('darkShadow2');
      addContainer.classList.toggle('darkShadow2');
      searchInput.classList.toggle('darkShadow2')
    }
  
    const deleteButtom1 = () => {
      const newtodos = todos.filter( todo => !todo.completed );
      saveTodos(newtodos);
      switch (slider) {
        case 2:
          const new2Todos = newtodos.filter(todo => !todo.completed);
          setSliderTodos(new2Todos);
          break;
        case 3:
          const new3Todos = newtodos.filter(todo => todo.completed);
          setSliderTodos(new3Todos);
          break;
        default:
          setSliderTodos(newtodos);
          break;
      }
    }
  
    const deleteButtom2 = () => {
      const newtodos = [];
      saveTodos(newtodos);
      switch (slider) {
        case 2:
          const new2Todos = newtodos.filter(todo => !todo.completed);
          setSliderTodos(new2Todos);
          break;
        case 3:
          const new3Todos = newtodos.filter(todo => todo.completed);
          setSliderTodos(new3Todos);
          break;
        default:
          setSliderTodos(newtodos);
          break;
      }
    }
    React.useEffect(() => {
      if (todos.length > 0) {
        setSliderTodos(todos);
      }
    }, [todos]);
    return (
        <TodoContext.Provider value={{todos, totalTodos, loading, error, createValue, setCreateValue, addClick, addClickState, searchValue, setSearchValue, deleteButtom1, deleteButtom2, filtredT, filtredSC, filtredC, loading, searchedTodos, completeTodo, deleteTodo, darkMode, completedTodosLenght}}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };