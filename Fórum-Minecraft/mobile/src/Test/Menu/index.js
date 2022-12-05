import {useState} from "react";

function App() {

    const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  }

    return (
        <div className="App">
            <div className={active ? "icon iconActive" : "icon"} >
                <div className="hamburguer hamburguerIcon"></div>
            </div>

            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className="list">
                    <ul className="listItems">
                        <li>HOME</li>
                        <li>TOPICOS</li>
                        <li>TOPICOS</li>
                        <li>TOPICOS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App;
