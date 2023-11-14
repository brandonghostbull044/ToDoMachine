import './index.css'

function TodoItem(props) {
    return (
      <li>
        <span className={`todo_item ${props.completed && "completedToDos"} ${!props.completed && "unready_ToDo"}`} onClick={props.onComplete}>✓</span>
        <p className={`todo_text ${props.completed && "completedToDosText"}`}>{props.text}</p>
        <span onClick={props.delete}>X</span>
      </li>
    )
  }

  export { TodoItem };