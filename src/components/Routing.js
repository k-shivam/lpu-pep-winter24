import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {lazy, Suspense} from "react";

import ChartData from "./ChartData";

const PostsList = lazy(() => import("./PostsList"));
const Home = lazy(() => import("./Home"));
const NavBar = lazy(() => import("./NavBar"))
const SignUp = lazy(() => import("./Signup"))
const Login = lazy(() => import("./Login"))
const CreatePost = lazy(() => import("./CreatePost"))
const About = lazy(() => import("./About"))
const Counter = lazy(() => import("./Counter"))


const Routing = () =>{
    const token = localStorage.getItem("token")

    return (
        <div>
            <Router>
                <NavBar/>
                <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/signup" element={<SignUp/>}></Route>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route exact path="/about" element={<About/>}></Route>
                    <Route exact path="/counter" element={<Counter/>}></Route>
                    <Route exact path="/create/post" element={<CreatePost/>}></Route> 
                    <Route exact path="/charts" element={<ChartData/>}></Route>
                    <Route exact path="/posts" element={<PostsList/>}></Route>
                </Routes>
                </Suspense>
            </Router>
        </div>
    )

}

export default Routing;