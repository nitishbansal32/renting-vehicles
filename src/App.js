import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home.js";
import Nav from "./Nav/Nav.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shops from "./Shops/Shops.js";
import Search from "./Search/Search.js";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Search />
                <Routes>
                    {/* <Route
                        path="/"
                        element={
                            <div className="Home-container">
                                <Home />
                            </div>
                        }
                    ></Route> */}
                    <Route path="/search/:id" element={<Shops />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
