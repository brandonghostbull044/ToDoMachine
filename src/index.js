import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



const addButtom = document.querySelector('.add_Container_Buttom');
const addInput = document.querySelector('.add_Container_Input');
addButtom.addEventListener('click', toggleInactive);

function toggleInactive() {
    if (addInput.classList.contains('inactive')) {
        addInput.classList.remove('inactive');
    }
    
}