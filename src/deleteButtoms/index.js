import './index.css'
import '../DarkMode/index.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function DeleteButtoms() {
    const {deleteButtom1, deleteButtom2} = React.useContext(TodoContext);
    return (
        <div className="deleteButtomContainer" >
            <div value='deltodos' className="deleteButtom" id="deleteButtom1" onClick={deleteButtom1}><p>Eliminar completados</p></div>
            <div className="deleteButtom" id="deleteButtom2" value='delcompletados' onClick={deleteButtom2}> <p>Eliminar todo</p></div>
        </div>
    )
}

export { DeleteButtoms };