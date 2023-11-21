import React from "react";
import { useLocalStorage } from "./Custom Hooks";
import { useChangeOrder } from "./Custom Hooks";
import { useSettings } from "./Custom Hooks";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const bodyItem = document.querySelector('#root');
    const create_button = document.querySelector('.create_button');
    const todo_list_container = document.querySelector('.todo_list_container');
    const slider_1 = document.querySelector('#slider_1');
    const slider_2 = document.querySelector('#slider_2');
    const slider_3 = document.querySelector('#slider_3');
    const deleteButtomContainer = document.querySelector('.deleteButtomContainer');
    const headerTittle = document.querySelector('.headerTitle');
    const addContainer = document.querySelector('.add_Container');
    const searchInput = document.querySelector('.Search_input');
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODO_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [slider, setSlider] = React.useState(1);
    const [order, setOrder] = React.useState('za');
    const [sliderTodos, setSliderTodos] = React.useState(todos);
    const [createValue, setCreateValue] = React.useState('');
    const [addClickState, setAddClickState] = React.useState(1);
    const totalTodos = todos.length;
    const searchedTodos = useChangeOrder(sliderTodos, order, searchValue);
    const completedTodosLenght = todos.filter(todo => todo.completed).length;
    const [openModal, setOpenModal] = React.useState(false);
    const [appLanguaje, setAppLanguaje] = React.useState('es');
    const [dark, setDark] = React.useState(false);
    const {userSettings, saveSettings} = useSettings('Brandon', order, appLanguaje, dark);
  
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
  
    const darkModeOn = () => {
      bodyItem.classList.add('darkBackground');
      create_button.classList.add('darkBackground');
      slider_1.classList.add('darkBackground');
      slider_2.classList.add('darkBackground');
      slider_3.classList.add('darkBackground');
      todo_list_container.classList.add('darkShadow');
      deleteButtomContainer.classList.add('darkShadow2');
      headerTittle.classList.add('darkShadow2');
      addContainer.classList.add('darkShadow2');
      searchInput.classList.add('darkShadow2')
    }

    const darkModeOff = () => {
      bodyItem.classList.remove('darkBackground');
      create_button.classList.remove('darkBackground');
      slider_1.classList.remove('darkBackground');
      slider_2.classList.remove('darkBackground');
      slider_3.classList.remove('darkBackground');
      todo_list_container.classList.remove('darkShadow');
      deleteButtomContainer.classList.remove('darkShadow2');
      headerTittle.classList.remove('darkShadow2');
      addContainer.classList.remove('darkShadow2');
      searchInput.classList.remove('darkShadow2')
    }

    const darkModeSwitch = () => {
      const switch_Mode = document.querySelector('.switch_Mode');
      switch_Mode.classList.toggle('darkButtom');
      setDark(!dark);
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

    const changeSettings = () => {
      const orderButtom = document.getElementById('orderButtom');
      const languaje = document.getElementById('languageButtom');
      setOrder(orderButtom.options[orderButtom.selectedIndex].value);
      setAppLanguaje(languaje.options[languaje.selectedIndex].value);
      setOpenModal(false);
      saveSettings(order, appLanguaje, dark);
      if (dark) {
        darkModeOn();
      } else {
        darkModeOff();
      }
    }

    React.useEffect(() => {
      if (todos.length > 0) {
        setSliderTodos(todos);
      }
    }, [todos]);

    React.useEffect(() => {
      setOrder(userSettings[0]);
      setAppLanguaje(userSettings[1]);
      setDark(userSettings[2]);
    }, [order]);

    return (
        <TodoContext.Provider value={{todos, totalTodos, loading, error, createValue, setCreateValue, addClick, addClickState, searchValue, setSearchValue, deleteButtom1, deleteButtom2, filtredT, filtredSC, filtredC, loading, searchedTodos, completeTodo, deleteTodo, completedTodosLenght, openModal, setOpenModal, changeSettings, darkModeSwitch, order, appLanguaje, dark}}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };