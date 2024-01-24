import { useNavigate, Link } from "react-router-dom";
import HomeImage from '../assets/download.jpeg';

const Home = () =>{
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogin = () =>{
        navigate("/login");
    }

    const handleSignup = () =>{
        navigate("/signup");
    }

    return(
        <section className="hero is-dark is-fullheight">
        <div className="hero-body">
        {!token ? <div className="container has-text-centered">
            <img src={HomeImage} />
            <h1 className="title">Welcome to our homepage</h1>
            <p className="subtitle">You must login or signup to see details of the site.</p>
            <button className="button is-danger mr-2" onClick={handleLogin}>Login</button> 
            <button className="button is-primary" onClick={handleSignup}>SignUp</button> 
        </div>:<div className="container has-text-centered">
        <img src={HomeImage} />
        <h1 className="title">Welcome to our homepage</h1>
        <p className="subtitle"><Link to="/create/post">You can Create a new Post BY CLicking Me.</Link></p>
        <p className="subtitle"><Link to="/">View List of Posts</Link></p>
        </div>}
        </div>
        </section>
    )
}

export default Home;