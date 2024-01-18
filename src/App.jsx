import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home"
import NavBar from "./components/NavBar";
import GrandChild from "./components/GrandChild";
import Login from './components/Login';
import Welcome from "./components/Welcome";


const App = () =>{
    const [showNav, setShowNav] = useState(false);

    const changeShowNavValue = () =>{
        setShowNav(true);
    }

    return (
        <>
        <div>
            <Router>
                {showNav && <NavBar/>}
                <Routes>
                    <Route exact path="/home" element={showNav ? <Welcome/> : <Home/>}></Route>
                    <Route exact path="/about" element={<GrandChild/>}></Route>
                    <Route exact path="/login" element={<Login navBar={changeShowNavValue}/>}></Route>
                </Routes>
            </Router>
        </div>

        </>
    )
}

export default App;
