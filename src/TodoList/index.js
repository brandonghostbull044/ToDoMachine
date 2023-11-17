import React from "react";
import './index.css'
import { TodoContext } from "../TodoContext";
import { TodoItem } from "../TodoItem";

function TodoList() {
    const {filtredT, filtredSC, filtredC, loading, searchedTodos, deleteTodo, completeTodo} = React.useContext(TodoContext);
    return (
        <div className="todo_list_container">
            <p onClick={filtredT} id="slider_1" className="focus_slider slider">Todos</p>
            <p onClick={filtredSC} id="slider_2" >Sin completar</p>
            <p onClick={filtredC} id="slider_3" >Completados</p>
            <ul>
                {loading && <div className="wrapper">
                                    <div className="space">
                                        <div className="loading"></div>
                                    </div>
                                </div>}
                    {searchedTodos.map(todo => (
                        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} delete={() => deleteTodo(todo.text)}/>
                    ))}
            </ul>
        </div>
        
    );
}

export { TodoList };