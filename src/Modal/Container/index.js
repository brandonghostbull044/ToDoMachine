import '../index.css'

function Container({children}) {
    return (
        <form className="SettingsContainer">
            {children}
        </form>
    );
};

export { Container };