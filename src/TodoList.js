import React from "react";

function TodoList({children, filterT, filterSC, filterC}) {
    return (
        <div className="todo_list_container">
            <p onClick={filterT}>Todos</p>
            <p onClick={filterSC}>Sin completar</p>
            <p onClick={filterC}>Completados</p>
            <ul>
                {children}
            </ul>
        </div>
        
    );
}

export { TodoList };