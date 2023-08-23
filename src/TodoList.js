import React from "react";

function TodoList({children, filterT, filterSC, filterC}) {
    return (
        <div className="todo_list_container">
            <p onClick={filterT} id="slider_1" className="focus_slider">Todos</p>
            <p onClick={filterSC} id="slider_2">Sin completar</p>
            <p onClick={filterC} id="slider_3">Completados</p>
            <ul>
                {children}
            </ul>
        </div>
        
    );
}

export { TodoList };