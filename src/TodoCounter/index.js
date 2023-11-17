import { TodoContext } from '../TodoContext';
import './index.css'
import React from 'react';

function TodoCounter() {
const {totalTodos, completedTodosLenght, loading, error} = React.useContext(TodoContext);

  if (loading) {
    return (<h1 className="headerTitle">
      Loading...
    </h1>);
  } else if (error) {
    return (<h1 className="headerTitle">
      !Hubo un error¡. Intenta recargar.
    </h1>);
  }else {
    if (completedTodosLenght  === totalTodos && totalTodos > 0) {
    return (<h1 className="headerTitle">
        ¡Felicidades, has completado todos los ToDo's!
      </h1>);
    } else if (totalTodos === 0) {
      return (<h1 className="headerTitle">
        Aún no tienes ToDo's
      </h1>);
    } else {
      return (<h1 className="headerTitle">
        Has completado <p className="headerTitle">{completedTodosLenght}</p> de <p className="headerTitle">{totalTodos}</p> ToDo's
      </h1>);
  }
  }
  
  }

  export { TodoCounter };