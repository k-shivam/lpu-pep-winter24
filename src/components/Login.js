import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Login = () =>{
    const navigate = useNavigate();
    const [userId, setUserId] = useState('')
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async(event) =>{
        event.preventDefault()
        if(validateForm()){
            try{
                const resp = await axios.post("http://127.0.0.1:3002/signin", data);
                console.log(resp.data)
                const token = resp.data.token;
                localStorage.setItem("token", token)
                localStorage.setItem("userId", parseInt(resp.data.data.id))
            }catch(err){
                console.log(err);
            }
            navigate('/')
        }
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setData(
            {
                ...data, 
                [name]: value,
            })
    }

    const validateForm = () =>{
        let valid = true;
        if(!data.email){
            setErrors((prevErrors) =>({
                ...prevErrors,
                email: "Please provide an valid email address"
            }))
            valid = false;
        }
        if(!data.password || data.password.length < 6){
            setErrors((prevErrors) =>({
                ...prevErrors,
                password: "Password must be atleast six chars long"
            }))
            valid = false
        }
        return valid
    }

    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
                <div className="hero-body">
                    <div className="container">
                        <div className="box">
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <input className="input"
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        value={data.email}
                                        onChange={handleChange}>
                                    </input>
                                    {errors.email && (
                                        <h1 style={{color:'red'}}>
                                        {errors.email}
                                    </h1>
                                    )}

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
                                    {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
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

export default Login;