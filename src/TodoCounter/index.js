import { TodoContext } from '../TodoContext';
import './index.css'
import React from 'react';

function TodoCounter() {
const {totalTodos, completedTodosLenght, loading, error, dark, appLanguaje} = React.useContext(TodoContext);

  if (loading) {
    return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
      Loading...
    </h1>);
  } else if (error) {
    return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
      !Hubo un error¡. Intenta recargar.
    </h1>);
  }else {
    if (completedTodosLenght  === totalTodos && totalTodos > 0) {
    return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
        ¡Felicidades, has completado todos los ToDo's!
      </h1>);
    } else if (totalTodos === 0) {
      return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
        Aún no tienes ToDo's
      </h1>);
    } else {
      return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
        {appLanguaje == 'es' && 'Has completado' || appLanguaje == 'en' && 'You have completed'} <p className="headerTitle">{completedTodosLenght}</p> {appLanguaje == 'es' && 'de' || appLanguaje == 'en' && 'of'} <p className="headerTitle">{totalTodos}</p> ToDo's
      </h1>);
  }
  }
  
  }

  export { TodoCounter };