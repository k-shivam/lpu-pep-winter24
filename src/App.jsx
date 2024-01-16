import React from "react";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GrandChild from "./components/GrandChild";


const App = ({name, age}) =>{
    return (
        <>
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route exact path="/child" element={<GrandChild/>}></Route>
                </Routes>
            </Router>
        </div>

        </>
    )
}

export default App;
