import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

import TableReresentation from './TableRepresentation';
import AuthProvider from './AuthProvider';

const PostsList = () => {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);

    const getApiData = async() =>{
        const response = await axios.get("https://data-server-node.onrender.com/posts");
        setApiData(response.data)
    }

    useEffect(() =>{
        getApiData()
    },[apiData])

    const handleClick = () =>{
        navigate("/create/post")
    }


    const handleEdit = async(id) =>{
        console.log(id)
        const payload = {title:"Angular"}
        try{
            await axios.put(`https://data-server-node.onrender.com/post/${id}`, payload);
            getApiData()
        }catch(error){
            console.log(error)
        }
    }

    const handleDelete = async(id) =>{
        try{
            await axios.delete(`https://data-server-node.onrender.com/post/${id}`);
            getApiData();
        }catch(err){
            console.log(err)
        }
    }

    
    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
                <h1 style={{backgroundColor:'grey', fontSize:"50px", textAlign:"center"}}>Posts List</h1>
                <button className='button is-success' onClick={handleClick}>Create Post</button>
                <br></br>
                <div className="hero-body">
                    <div className="container">
                        <div className="has-text-centered">
                            <TableReresentation 
                                data={apiData}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AuthProvider(PostsList);
