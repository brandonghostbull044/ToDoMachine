import './index.css'

function Orden() {
    return (
        <div className='orderContariner'>
            <label htmlFor="orderButtom">Order</label>
            <select name="Order" id="orderButtom">
                <option value="az">Alfabético (A-Z)</option>
                <option value="za">Alfabético invertido (Z-A)</option>
                <option value="ncc">No completados primero</option>
                <option value="cnc">Completado primero</option>
            </select>
        </div>
    );
};

export { Orden };