function CreateTodoButtom({createValue, setCreateValue, addClick, counter}) {
    if (counter == 1) {
        return (
        <div className="add_Container">
            <input id="inputAdder" className="add_Container_Input inactive" placeholder="Crea un ToDo" value={createValue} onChange={(event) => {setCreateValue(event.target.value)}}/>
            <button id="create_button" className="add_Container_Buttom" onClick={addClick}>+</button>
        </div>
    );
    } else {
        return (
            <div className="add_Container">
                <input id="inputAdder" className="add_Container_Input inactive" placeholder="Crea un ToDo" value={createValue} onChange={(event) => {setCreateValue(event.target.value)}}/>
                <button id="create_button" className="add_Container_buttom" onClick={addClick}>✓</button>
            </div>
        )
    }
    
}

export { CreateTodoButtom };