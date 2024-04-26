import React from "react";
import './index.css'
import { TodoContext } from "../TodoContext";
import { TodoItem } from "../TodoItem";

function TodoList() {
    const {filtredT, filtredSC, filtredC, loading, searchedTodos, deleteTodo, completeTodo, dark, appLanguaje} = React.useContext(TodoContext);
    return (
        <div className={"todo_list_container " + (dark && 'darkShadow')}>
            {appLanguaje === 'es' && <p onClick={filtredT} id="slider_1" className={"focus_slider slider " + (dark && 'darkBackground')}>Todas</p>}
            {appLanguaje === 'en' && <p onClick={filtredT} id="slider_1" className={"focus_slider slider " + (dark && 'darkBackground')}>All</p>}
            {appLanguaje === 'es' && <p onClick={filtredSC} id="slider_2" className={dark && 'darkBackground' }>Sin completar</p>}
            {appLanguaje === 'en' && <p onClick={filtredSC} id="slider_2" className={dark && 'darkBackground'}>Not completed</p>}
            {appLanguaje === 'es' && <p onClick={filtredC} id="slider_3" className={dark && 'darkBackground'}>Completadas</p>}
            {appLanguaje === 'en' && <p onClick={filtredC} id="slider_3" className={dark && 'darkBackground'}>Completed</p>}
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