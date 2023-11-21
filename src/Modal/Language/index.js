import './index.css'
import React from 'react';
import { TodoContext } from '../../TodoContext';

function Language() {
    const {appLanguaje} = React.useContext(TodoContext);
    return (
        <div className='languageContariner'>
            <label htmlFor="languageButtom">Language</label>
            <select name="Languaje" id="languageButtom">
                <option value="es" selected={appLanguaje === 'es' && true} >Español</option>
                <option value="en" selected={appLanguaje === 'en' && true} >English</option>
            </select>
        </div>
    );
};

export { Language };