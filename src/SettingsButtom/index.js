import './index.css'
import { TodoContext } from '../TodoContext';
import React from 'react';

function SettingsButtom() {
    const {setOpenModal, openModal} = React.useContext(TodoContext);
    return (
        <div className='settingsIcon' onClick={() => {setOpenModal(!openModal)}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export { SettingsButtom };