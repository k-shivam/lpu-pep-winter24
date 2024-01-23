import { useNavigate } from "react-router-dom";
import HomeImage from '../assets/download.jpeg';

const Home = () =>{
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate("/login");
    }

    const handleSignup = () =>{
        navigate("/signup");
    }

    return(
        <section className="hero is-dark is-fullheight">
        <div className="hero-body">
        <div className="container has-text-centered">
            <img src={HomeImage} />
            <h1 className="title">Welcome to our homepage</h1>
            <p className="subtitle">You must login or signup to see details of the site.</p>
            <button className="button is-danger mr-2" onClick={handleLogin}>Login</button> 
            <button className="button is-primary" onClick={handleSignup}>SignUp</button> 
        </div>
        </div>
        </section>
    )
}

export default Home;