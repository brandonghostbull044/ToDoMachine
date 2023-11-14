import './index.css'

function TodoCounter({total, completed}) {
  if (completed  === total && total > 0) {
    return (<h1 className="headerTitle">
    ¡Felicidades, has completado todos los ToDo's!
  </h1>);
  } else if (total === 0) {
    return (<h1 className="headerTitle">
    Aún no tienes ToDo's
  </h1>);
  } else {
    return (<h1 className="headerTitle">
    Has completado <p className="headerTitle">{completed}</p> de <p className="headerTitle">{total}</p> ToDo's
  </h1>);
  }
  }

  export { TodoCounter };