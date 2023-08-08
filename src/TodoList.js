function TodoList({children}) {
    return (
        <div className="todo_list_container">
            <p>Todos</p>
            <p>Sin completar</p>
            <p>Completados</p>
            <ul>
                {children}
            </ul>
        </div>
        
    );
}

export { TodoList };