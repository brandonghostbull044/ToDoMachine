import './index.css'
import React from 'react';
import { TodoContext } from '../../TodoContext';

function SubmitButtom() {
    const {changeSettings} = React.useContext(TodoContext);
    return (
        <button className='submittButtom' onClick={() => changeSettings()}>Guardar</button>
    );
};

export { SubmitButtom };