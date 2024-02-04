import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {Suspense} from "react";

const Home = React.lazy(() => import("./Home"))
const NavBar = React.lazy(() => import("./NavBar"))
const GrandChild = React.lazy(() => import("./GrandChild"))
const Login = React.lazy(() => import("./Login"))
const PostsList = React.lazy(() => import("./PostsList"))
const SignUp = React.lazy(() => import("./Signup"))
const CreatePost = React.lazy(() => import("./CreatePost"))
const Charting = React.lazy(() => import("./CreatePost"))
const Welcome = React.lazy(() => import("./Welcome"))


const Routing = () =>{
    const token = localStorage.getItem("token")
    return(
    <div>
            <Router>
                <Suspense>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={token ? <PostsList/> : <Home/>}></Route>
                    <Route exact path="/about" element={<GrandChild/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/signup" element={<SignUp/>}></Route>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route exact path="/create/post" element={<CreatePost/>}></Route> 
                    <Route exact path="/charts" element={<Charting/>}></Route>
                </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default Routing;