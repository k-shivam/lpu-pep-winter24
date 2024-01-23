import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home"
import NavBar from "./components/NavBar";
import GrandChild from "./components/GrandChild";
import Login from './components/Login';
import PostsList from "./components/PostsList";
import SignUp from "./components/Signup";
import CreatePost from "./components/CreatePost";
import Charting from "./components/Charting";


const App = () =>{
    const [showNav, setShowNav] = useState(false);

    const changeShowNavValue = () =>{
        setShowNav(true);
    }

    return (
        <>
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<PostsList/>}></Route>
                    <Route exact path="/about" element={<GrandChild/>}></Route>
                    <Route exact path="/login" element={<Login navBar={changeShowNavValue}/>}></Route>
                    <Route exact path="/signup" element={<SignUp/>}></Route>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route exact path="/create/post" element={<CreatePost/>}></Route> 
                    <Route exact path="/charts" element={<Charting/>}></Route>
                </Routes>
            </Router>
        </div>

        </>
    )
}

export default App;
