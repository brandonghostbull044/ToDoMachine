import './index.css'
import '../DarkMode/index.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButtom() {
    const {createValue, setCreateValue, addClick, addClickState} = React.useContext(TodoContext);

    if (addClickState === 1) {
        return (
        <div className="add_Container">
            <button className="create_button add_Container_Buttom" onClick={addClick}>+</button>
        </div>
    );
    } else {
        return (
            <div className="add_Container">
                <input id="inputAdder" className="add_Container_Input" placeholder="Crea un ToDo" value={createValue} onChange={(event) => {setCreateValue(event.target.value)}} onKeyPress={(event) => {
                    if (event.key === 'Enter') {addClick()}
                }}/>
                <button className="create_button add_Container_buttom" onClick={addClick}>✓</button>
            </div>
        )
    }
    
}

export { CreateTodoButtom };