import './index.css'
import '../DarkMode/index.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function DeleteButtoms() {
    const {deleteButtom1, deleteButtom2, dark, appLanguaje} = React.useContext(TodoContext);
    return (
        <div className={"deleteButtomContainer " + (dark && 'darkShadow2')} >
            {appLanguaje == 'es' && <div value='deltodos' className="deleteButtom" id="deleteButtom1" onClick={deleteButtom1}><p>Eliminar completadas</p></div>}{appLanguaje == 'en' && <div value='deltodos' className="deleteButtom" id="deleteButtom1" onClick={deleteButtom1}><p>Delete completed</p></div>}
            {appLanguaje == 'es' && <div className="deleteButtom" id="deleteButtom2" value='delcompletados' onClick={deleteButtom2}> <p>Eliminar todas</p></div>}
            {appLanguaje == 'en' && <div className="deleteButtom" id="deleteButtom2" value='delcompletados' onClick={deleteButtom2}> <p>Delete all</p></div>}
        </div>
    )
}

export { DeleteButtoms };