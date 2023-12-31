import './index.css'
import '../../DarkMode/index.css'
import React from 'react';
import { TodoContext  } from '../../TodoContext';

function SwitchMode() {
    const {darkModeSwitch, dark, appLanguaje} = React.useContext(TodoContext);
    return (
        <div className='darkModeContainer'>
            <label htmlFor="orderButtom">{appLanguaje == 'es' && 'Modo Oscuro/Claro' || appLanguaje == 'en' && 'Dark/Light Mode'}</label>
            <div className={"switch_Mode_Container " + (dark && 'darkButtom')} onClick={darkModeSwitch}>
                <div className={"switch_Mode " + (dark && 'darkButtom')} ></div>
            </div>
        </div>
        )
}

export { SwitchMode };