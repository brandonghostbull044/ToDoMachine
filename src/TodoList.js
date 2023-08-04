function TodoList({children}) {
    return (
        <div className="todo_list_container">
            <ul>
                {children}
            </ul>
        </div>
        
    );
}

export { TodoList };