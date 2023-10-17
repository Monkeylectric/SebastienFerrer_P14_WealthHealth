import './Main.css';

function Main({customStyle, children}) {
    return (
        <main className="main-section" style={customStyle}>
            { children }
        </main>
    )
}

export default Main;