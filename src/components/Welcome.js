import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

import TableReresentation from './TableRepresentation';
import AuthProvider from './AuthProvider';

const Welcome = () => {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);

    const getApiData = async() =>{
        const response = await axios.get("https://data-server-node.onrender.com/");
        setApiData(response.data)
    }

    useEffect(() =>{
        getApiData()
    },[apiData])

    const handleSignupclick = () =>{
        navigate('/signup');
    }

    const handleEdit = async(id) =>{
        console.log(id)
        const payload = {fullName:"Akhil Kumar"}
        try{
            await axios.put(`https://data-server-node.onrender.com/${id}`, payload);
            getApiData()
        }catch(error){
            console.log(error)
        }
    }

    const handleDelete = (row) =>{
        console.log('Delete clicked for row:', row)
    }

    
    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
                <br></br>
                <button className='button is-success' onClick={handleSignupclick}>Add User</button>
                <div className="hero-body">
                    <div className="container">
                        <div className="has-text-centered">
                            <TableReresentation 
                                // columns={columns} 
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


export default AuthProvider(Welcome);
