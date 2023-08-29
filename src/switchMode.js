function SwitchMode({darkMode}) {
    return (
        <div className="switch_Mode_Container" onClick={darkMode}>
            <div className="switch_Mode" ></div>
        </div>
    )
}

export { SwitchMode };