function CreateTodoButtom() {
    return (
        <div className="add_Container inactive">
            <input className="add_Container_Input" placeholder="Crea un ToDo" onChange={(html) => {
                const add_input_html = html.target;
                const add_input_value = html.target.value;
                console.log(add_input_value);
            }}/>
            <button className="add_Container_Buttom" onClick={(html) => {const add_buttom_html = html.target;
            console.log(add_buttom_html);
            }
        }>+</button>
        </div>
        
    );
}

export { CreateTodoButtom };