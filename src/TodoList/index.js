import React from "react";
import './index.css'

function TodoList({children, filterT, filterSC, filterC}) {
    return (
        <div className="todo_list_container">
            <p onClick={filterT} id="slider_1" className="focus_slider slider">Todos</p>
            <p onClick={filterSC} id="slider_2" >Sin completar</p>
            <p onClick={filterC} id="slider_3" >Completados</p>
            <ul>
                {children}
            </ul>
        </div>
        
    );
}

export { TodoList };