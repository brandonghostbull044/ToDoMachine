function TodoList({children}) {
    return (
        <div className="todo_list_container">
            <p onClick={{children}.filter} value={1}>Todos</p>
            <p onClick={{children}.filter} value={2}>Sin completar</p>
            <p onClick={{children}.filter} value={3}>Completados</p>
            <ul>
                {children}
            </ul>
        </div>
        
    );
}

export { TodoList };