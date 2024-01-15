import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = (props) =>{
    const {showNavBAr} = props;
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
})

    const handleSubmit = (event) =>{
        event.preventDefault()
        navigate('/')
        showNavBAr()

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

export default Login;