import { TodoContext } from '../TodoContext';
import './index.css'
import React from 'react';

function TodoCounter() {
const {totalTodos, completedTodosLenght, loading, error, dark, appLanguaje} = React.useContext(TodoContext);

  if (loading) {
    return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
      {appLanguaje == 'es' && 'Cargando...' || appLanguaje == 'en' && 'Loading...'}
    </h1>);
  } else if (error) {
    return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
      {appLanguaje == 'es' && '!Ocurrió un Error¡. Intenta recargar.' || appLanguaje == 'en' && 'An Error occurred, try to refresh.'}
    </h1>);
  }else {
    if (completedTodosLenght  === totalTodos && totalTodos > 0) {
    return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
        {appLanguaje == 'es' && '¡Felicidades, has completado todos las Tareas!' || appLanguaje == 'en' && "Congratulations, you have completed all ToDo's"}
      </h1>);
    } else if (totalTodos === 0) {
      return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
        {appLanguaje == 'es' && 'Aún no tienes Tareas' || appLanguaje == 'en' && "You don't have ToDo's"}
      </h1>);
    } else {
      return (<h1 className={"headerTitle " + (dark && 'darkShadow2')}>
        {appLanguaje == 'es' && 'Has completado' || appLanguaje == 'en' && 'You have completed'} <p className="headerTitle">{completedTodosLenght}</p> {appLanguaje == 'es' && 'de' || appLanguaje == 'en' && 'of'} <p className="headerTitle">{totalTodos}</p> {appLanguaje == 'es' && 'Tareas' || appLanguaje == 'en' && "ToDo's"}
      </h1>);
  }
  }
  
  }

  export { TodoCounter };