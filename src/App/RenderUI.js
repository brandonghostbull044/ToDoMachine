import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import './index.css';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { SwitchMode } from '../switchMode';
import { DeleteButtoms } from '../deleteButtoms';

function RenderUI({todos, totalTodos, createValue, setCreateValue, addClick, searchValue, setSearchValue, addClickState, deleteButtom1, deleteButtom2, filtredT, filtredC, filtredSC, searchedTodos, darkMode, completeTodo, deleteTodo, loading, error}) {
    return(
        <>
            <TodoCounter completed={todos.filter( todo => !!todo.completed ).length} total={totalTodos} loading = {loading} error = {error}/>
            <CreateTodoButtom searchValue={createValue} setCreateValue={setCreateValue} addClick={addClick} counter={addClickState}/>
            
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            <DeleteButtoms deleteButtom1={deleteButtom1} deleteButtom2={deleteButtom2}></DeleteButtoms>
            <TodoList filterT={filtredT} filterC={filtredC} filterSC={filtredSC}>
                {loading && <div className="wrapper">
                                <div className="space">
                                    <div className="loading"></div>
                                </div>
                            </div>}
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} delete={() => deleteTodo(todo.text)}/>
                ))}
            </TodoList>
    
            <SwitchMode darkMode={darkMode}/>
         </>
      )
}

export { RenderUI }