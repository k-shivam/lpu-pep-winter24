import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import AuthProvider from "./AuthProvider";

const CreatePost = () =>{
    const [formData, setFormData] = useState({
        title: "",
        description: ""
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
        let userId = localStorage.getItem("userId")
        let payload = {...formData, userId}
        let headers = {"Authorization": localStorage.getItem("token")}
        console.log(payload)
        try{
            const resp = await axios.post("https://data-server-node.onrender.com/posts/create", payload,{
                headers
            });
            const resData = resp.data
            navigate('/home')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        ></input>
                        <label className="label">Description</label>
                        <textarea
                            className="textarea"
                            type="text"
                            placeholder="descrition"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div>
                    <button className="button is-warning">Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default AuthProvider(CreatePost);