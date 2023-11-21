import '../index.css'

function Container({children}) {
    return (
        <div className="SettingsContainer">
            {children}
        </div>
    );
};

export { Container };