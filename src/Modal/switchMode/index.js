import './index.css'
import '../../DarkMode/index.css'
import React from 'react';
import { TodoContext  } from '../../TodoContext';

function SwitchMode() {
    const {darkMode} = React.useContext(TodoContext);
    return (
        <div className='darkModeContainer'>
            <label htmlFor="orderButtom">Dark/Light Mode</label>
            <div className="switch_Mode_Container" onClick={darkMode}>
                <div className="switch_Mode" ></div>
            </div>
        </div>
        )
        
        
}

export { SwitchMode };