import './index.css'
import React from 'react';
import { TodoContext } from '../../TodoContext';

function Orden() {
    const {order, appLanguaje} = React.useContext(TodoContext);
    return (
        <div className='orderContariner'>
            <label htmlFor="orderButtom">{appLanguaje == 'es' && 'Órden'||appLanguaje == 'en' && 'Order'}</label>
            <select name="Order" id="orderButtom">
                <option value="az" selected={order === 'az' && true} >Alfabético (A-Z)</option>
                <option value="za" selected={order === 'za' && true} >Alfabético invertido (Z-A)</option>
                <option value="ncp" selected={order === 'ncp' && true} >No completados primero</option>
                <option value="cp" selected={order === 'cp' && true} >Completados primero</option>
                <option value="pfaa" selected={order === 'pfaa' && true} >Fecha de agregado (AS)</option>
                <option value="pfad" selected={order === 'pfad' && true} >Fecha de agregado (DES)</option>
            </select>
        </div>
    );
};

export { Orden };