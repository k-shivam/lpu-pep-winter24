import axios from "axios";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import TableComponent from "./TableComponent";

const Welcome = () =>{
    const [apiData, setApiData] = useState([]);
    const navigate = useNavigate()

    useEffect(() =>{
        getDataFromApi();
    }, [])

    const getDataFromApi = async() =>{
        const response = await axios.get("http://127.0.0.1:3002/");
        setApiData(response.data)
    }

    const handleAddUser = () =>{
        navigate('/signup')
    }

    const handleEdit = async(id) =>{
        const data = {email: "lpu@gmail.com"}
        try{
            await axios.put(`http://127.0.0.1:3002/${id}`, data);
        }catch(error){
            console.log(error)
        }
        getDataFromApi()
    }

    const handleDelete = async(id) =>{
        try{
            await axios.delete(`http://127.0.0.1:3002/${id}`);
        }catch(error){
            console.log(error)
        }
        getDataFromApi()
    }

    return (
        <>
        <div>
        <button className="button is-success" onClick={handleAddUser}>Add User</button>
        </div>
        <TableComponent data={apiData} onEdit={handleEdit} onDelete={handleDelete}/>
        </>
    )
}
export default Welcome;