import './index.css'

function Language() {
    return (
        <div className='languageContariner'>
            <label htmlFor="languajeButtom">Language</label>
            <select name="Languaje" id="languageButtom">
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </div>
    );
};

export { Language };