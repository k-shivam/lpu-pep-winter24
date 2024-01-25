import {useNavigate, Link } from 'react-router-dom';
import HomeImage from '../assets/download.jpeg';


const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");    

    const handleLogin = () =>{
        navigate('/login')
    }

    const handleClick = () =>{
        navigate('/create/post')
    }
    
    return (
        <section className="hero is-fullheight is-success">
            <div className="hero-head">
                <div className="hero-body">
                    <div className="container">
                        {!token ? <div className="has-text-centered">
                            <img src={HomeImage}></img>
                            <h1 className="title">This is our main Home page</h1>
                            <p className="subtitle">We can Add login and signup button here</p>
                            <button className="button is-warning mr-2" onClick={handleLogin}>Login</button>
                            <button className="button is-danger">Signup</button>
                            </div>: 
                            <div className="has-text-centered">
                            <img src={HomeImage}></img>
                            <h1 className="title">This is our main Home page</h1>
                            <p className="subtitle"><Link style={{ color:"blueviolet"}} to="/create/post">You can start Creating your posts by Clicking Me</Link></p>

                            <br></br>
                            <br></br>
                            <p className="subtitle"><Link style={{ color:"black"}} to="/">You can view List Page Here</Link></p>
                            </div>}
                        </div> 
                    </div>
                </div>
        </section>
    )
}


export default Home;
