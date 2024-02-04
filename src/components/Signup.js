import {useRef} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () =>{
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const fullNameRef = useRef("");

    const navigate = useNavigate();


    const handleSubmit = async(event) =>{
        event.preventDefault()
        const dataObj = {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(dataObj)
        try{
            await axios.post("https://data-server-node.onrender.com/addUser", dataObj);
        }catch(error){
            console.log(error)
        }
        navigate('/home')
    }

    return (
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            type="email"
                            placeholder="email"
                            name="email"
                            ref={emailRef}
                        ></input>
                    </div>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="fullName"
                            name="fullName"
                            ref={fullNameRef}
                        ></input>
                    </div>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            placeholder="password"
                            name="password"
                            ref={passwordRef}
                        ></input>
                    </div>
            </div>
            <div>
                    <button className="button is-warning">Add User</button>
                </div>
            </form>
        </div>
        </>
    )
}


export default SignUp;