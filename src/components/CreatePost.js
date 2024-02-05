import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

import AuthProvider from "./AuthProvider";

const CreatePost = () =>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: "",
        description: ""
    })

    const handleSubmit = async(event) =>{
        event.preventDefault()
        let userId = localStorage.getItem("userId");
        let token = localStorage.getItem("token");
        let payload = {...data, userId}
        try{
            const resp = await axios.post("https://data-server-node.onrender.com/posts/create", payload, {
                headers:{"Authorization": token}
            });
            console.log(resp.data)
        }catch(err){
            console.log(err);
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
                                    <label className="label">Title</label>
                                    <input className="input"
                                        type="text"
                                        name="title"
                                        placeholder="title"
                                        value={data.title}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                                <div className="field">
                                    <label className="label">Description</label>
                                    <textarea className="textarea"
                                        type="textarea"
                                        name="description"
                                        placeholder="description..."
                                        value={data.description}
                                        onChange={handleChange}>
                                    </textarea>
                                </div>
                    <div>
                        <button className="button is-primary">Create Post</button>
                    </div>
                </form>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default AuthProvider(CreatePost);