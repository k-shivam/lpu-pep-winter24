import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

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
                    <Route exact path="/" element={!data ?<Home/> : <Welcome/>}></Route>
                    <Route exact path="/login" element={<Login showNavBAr={hanldeDataShow}/>}></Route>
                    <Route exact path="/signup" element={<Signup/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
