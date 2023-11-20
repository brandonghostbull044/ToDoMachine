import './index.css'
import React from 'react';
import { TodoContext } from '../../TodoContext';

function Cross() {
    const {setOpenModal} = React.useContext(TodoContext);
    return (
        <p className='exitCross' onClick={() => {setOpenModal(false)}}>X</p>
    );
}

export { Cross };