import './index.css'
import '../DarkMode/index.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButtom() {
    const {createValue, setCreateValue, addClick, addClickState, dark} = React.useContext(TodoContext);

    if (addClickState === 1) {
        return (
        <div className={"add_Container " + (dark && 'darkShadow2')}>
            <button className={"create_button add_Container_Buttom " + (dark && 'darkBackground')} onClick={addClick}>+</button>
        </div>
    );
    } else {
        return (
            <div className={"add_Container " + (dark && 'darkShadow2')}>
                <input id="inputAdder" className="add_Container_Input" placeholder="Crea un ToDo" value={createValue} onChange={(event) => {setCreateValue(event.target.value)}} onKeyPress={(event) => {
                    if (event.key === 'Enter') {addClick()}
                }}/>
                <button className={"create_button add_Container_buttom " + (dark && 'darkBackground')} onClick={addClick}>✓</button>
            </div>
        )
    }
    
}

export { CreateTodoButtom };