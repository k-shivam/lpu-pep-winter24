import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Signup from './Signup';


const Welcome = () => {
    const navigate = useNavigate();
    const data = false;
    const [apiData, setApiData] = useState([]);

    const getApiData = async() =>{
        const response = await axios.get("http://127.0.0.1:3002/");
        setApiData(response.data)
    }

    useEffect(() =>{
        getApiData()
    },[])

    const handleSignupclick = () =>{
        navigate('/signup');
    }
    
    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
                <br></br>
                <button className='button is-success' onClick={handleSignupclick}>Add User</button>
                <div className="hero-body">
                    <div className="container">
                        <div className="has-text-centered">
                            {apiData.map((item, index) =>{
                                return (
                                    <div className='container' key={item.id}>
                                        <h1 className='title'>{item.fullName}</h1>
                                        <p className='subtitle'>{item.email}</p>
                                        <h2>{item.id}</h2>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}


export default Welcome;
