import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () =>{
    const [data, setData] = useState({
        fullName: "",
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const handleSubmit = async(event) =>{
        event.preventDefault();
        try{
            await axios.post("http://127.0.0.1:3002/addUser", data)
        }catch(error){
            console.log(error)
        }
        navigate('/')
    }

    
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setData(
            {
                ...data, 
                [name]: value,
            })
    }

    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
                <div className="hero-body">
                    <div className="container">
                        <div className="box">
                            <form onSubmit={handleSubmit}>
                            <div className="field">
                                    <label className="label">FullName</label>
                                    <input className="input"
                                        type="fullName"
                                        name="fullName"
                                        placeholder="fullName"
                                        value={data.fullName}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <input className="input"
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        value={data.email}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <input className="input"
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={data.password}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                    <div>
                        <button className="button is-primary">Submit</button>
                    </div>
                </form>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;