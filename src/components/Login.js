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
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-half">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="email"
                            value={data.email}
                            onChange={handleChange}>
                        </input>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            placeholder="password"
                            value={data.password}
                            onChange={handleChange}>
                        </input>
                    </div>
                    <div>
                        <button className="button is-warning">Submit</button>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Login;