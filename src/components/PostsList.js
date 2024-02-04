import axios from "axios";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import AuthProvider from "./AuthProvider";

import TableComponent from "./TableComponent";

const PostsList = () =>{
    const [postData, setPostData] = useState([]);
    const navigate = useNavigate()

    useEffect(() =>{
        getAPiData();
    },[])

    const getAPiData = async() =>{
        try{
            const resp = await axios.get("https://data-server-node.onrender.com/posts");
            setPostData(resp.data);
        }catch(err){
            console.log(err)
        }
    }

    const handleEdit = async(id) =>{
        let data = {title: "Second"}
        try{
            await axios.put(`https://data-server-node.onrender.com/post/${id}`, data);
            getAPiData()
        }catch(error){
            console.log(error)
        }
    }

    const handleDelete = async(id) =>{
        try{
            await axios.delete(`https://data-server-node.onrender.com/post/${id}`);
            getAPiData()
        }catch(error){
            console.log(error)
        }
    }

    const handleClick = () =>{
        navigate("/create/post")
    }

    return (
        <div className="container">
            <button className="button is-warning" onClick={handleClick}>Create Post</button>
            <div className="hero is-fullwidth is-success has-text-centered">
            <h1 style={{height: "100px", fontSize: "20px"}}>List of Posts</h1>
            </div>
        <TableComponent data={postData} onEdit={handleEdit} onDelete={handleDelete}/>
        </div>
    )
}

export default AuthProvider(PostsList);