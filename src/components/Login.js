import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = (props) =>{
    const {showNavBAr} = props;
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email:"",
        password:""
    })

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(validateForm()){
            navigate('/')
            showNavBAr()
        }

    }

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setData(
            {
                ...data, 
                [name]: value,
            })
        console.log(data)

    }

    const validateForm = () =>{
        let valid = true;
        if(!data.email){
            setErrors((prevErrors) =>({
                ...prevErrors,
                email: "Please Enter valid email address"
            }))
            valid = false;
        }
        if(!data.password || data.password.length <6){
            setErrors((prevErrors) =>({
                ...prevErrors,
                password: "Password must be atleast 6 characters"
            }))
            valid = false;
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
                                    <input className={`input ${errors.email && "is-danger"}`}
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        value={data.email}
                                        onChange={handleChange}>
                                    </input>
                                    {errors.email && (
                                    <p className="help is-danger">{errors.email}</p>
                                    )}
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <input className={`input ${errors.password && "is-danger"}`}
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={data.password}
                                        onChange={handleChange}>
                                    </input>
                                    {errors.password && (
                                        <p className="help is-danger">{errors.password}</p>
                                    )}
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