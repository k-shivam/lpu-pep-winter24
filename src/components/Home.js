import {useNavigate} from 'react-router-dom';
import HomeImage from '../assets/download.jpeg';


const Home = () => {
    const navigate = useNavigate();
    const data = false;

    const handleLogin = () =>{
        navigate('/login')
    }
    
    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
                <div className="hero-body">
                    <div className="container">
                        <div className="has-text-centered">
                            <img src={HomeImage}></img>
                            <h1 className="title">This is our main Home page</h1>
                            <p className="subtitle">We can Add login and signup button here</p>
                            <button className="button is-success mr-2" onClick={handleLogin}>Login</button>
                            <button className="button is-success">Signup</button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}


export default Home;
