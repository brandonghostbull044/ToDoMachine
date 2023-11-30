import './index.css'
import React from 'react';
import { TodoContext } from '../../TodoContext';

function Orden() {
    const {order, appLanguaje} = React.useContext(TodoContext);
    return (
        <div className='orderContariner'>
            <label htmlFor="orderButtom">{appLanguaje == 'es' && 'Órden'||appLanguaje == 'en' && 'Order'}</label>
            <select name="Order" id="orderButtom">
                <option value="az" selected={order === 'az' && true} >{appLanguaje == 'es' 
                && 'Alfabético' || appLanguaje == 'en' && 'Alphabetical'} (A-Z)</option>
                <option value="za" selected={order === 'za' && true} >{appLanguaje == 'es' && 'Alfabético invertido' || appLanguaje == 'en' && 'Inverted alphabet'} (Z-A)</option>
                <option value="ncp" selected={order === 'ncp' && true} >{appLanguaje == 'es' && 'No completados primero' || appLanguaje == 'en' && 'Not completed first'}</option>
                <option value="cp" selected={order === 'cp' && true} >{appLanguaje == 'es' && 'Completados primero' || appLanguaje == 'en' && 'Completed first'}</option>
                <option value="pfaa" selected={order === 'pfaa' && true} >{appLanguaje == 'es' && 'Fecha de agregado' || appLanguaje == 'en' && 'Upload date'} (AS)</option>
                <option value="pfad" selected={order === 'pfad' && true} >{appLanguaje == 'es' && 'Fecha de agregado' || appLanguaje == 'en' && 'Upload date'} (DES)</option>
            </select>
        </div>
    );
};

export { Orden };