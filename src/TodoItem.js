function TodoItem(props) {
    return (
      <li>
        <span className={`todo_item ${props.completed && "completedToDos"} ${!props.completed && "unready_ToDo"}`}>✓</span>
        <p className={`todo_text ${props.completed && "completedToDosText"}`}>{props.text}</p>
        <span>X</span>
      </li>
    )
  }

  export { TodoItem };