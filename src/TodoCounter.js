function TodoCounter({total, completed}) {
    return (
      <h1 className="headerTitle">
        Has completado <p className="headerTitle">{completed}</p> de <p className="headerTitle">{total}</p> ToDo's
      </h1>
    );
  }

  export { TodoCounter };