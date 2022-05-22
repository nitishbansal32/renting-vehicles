import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home.js";
import Nav from "./Nav/Nav.js";

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="Home-container">
                <Home />
            </div>
        </div>
    );
}

export default App;
