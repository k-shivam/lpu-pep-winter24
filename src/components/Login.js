import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () =>{
    
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async(event) =>{
        event.preventDefault()
        if(validateForm()){
            const resp = await axios.post("https://data-server-node.onrender.com/signin", formData);
            const resData = resp.data
            localStorage.setItem("token", resData.token)
            localStorage.setItem("userId", resData.data.id);
            navigate('/')
        }
        else{
            console.log(errors)
        }
    }

    const validateForm = () =>{
        let valid = true;
        const newErrors = {};
        if(!formData.email){
            newErrors.email = "Please enter a valid email"
            setErrors(newErrors)
        }
        if(!formData.password || formData.password.length <6){
            newErrors.password = "Password must be at least 6 characters long"
            setErrors(newErrors)
            valid = false;
        }
        return valid
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        ></input>
                        {errors.email && (<p className="is-danger">{errors.email}</p>)}
                        <input
                            className="input"
                            type="password"
                            placeholder="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        ></input>
                        {errors.password && (<p style={{color:'red'}}>{errors.password}</p>)}
                    </div>
                </div>
                <div>
                    <button className="button is-warning">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;