import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import './index.css';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { SwitchMode } from '../switchMode';
import { DeleteButtoms } from '../deleteButtoms';

function RenderUI() {
    return(
        <>
            <TodoCounter/>
            <CreateTodoButtom/>
            <TodoSearch/>
            <DeleteButtoms/>
            <TodoList/>
            <SwitchMode/>
        </>
      );
}

export { RenderUI };