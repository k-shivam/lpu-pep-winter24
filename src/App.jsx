import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";

const App = () =>{
    const [data, setData] = useState(false);


    const hanldeDataShow = () =>{
        setData(true)
    }

    const hideNavBar = () =>{
        setData(false);
    }

    return (
        <div>
            <Router>
                {data && <NavBar hideNavBar={hideNavBar}/>}
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/login" element={<Login hanldeDataShow={hanldeDataShow}/>}></Route>
                    <Route exact path="/signup" element={<Signup/>}></Route>
                    <Route exact path="/counter" element={<Counter/>}></Route>
                    <Route exact path="/home" element={<Welcome/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
