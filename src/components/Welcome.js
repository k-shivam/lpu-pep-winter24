import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Welcome = () => {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);

    const getApiData = async() =>{
        const response = await axios.get("http://127.0.0.1:3002/");
        setApiData(response.data)
    }

    useEffect(() =>{
        getApiData()
    },[apiData])

    const handleSignupclick = () =>{
        navigate('/signup');
    }

    const handleEdit = async(id) =>{
        const payload = {fullName:"Surya Kumar"}
        try{
            await axios.put(`http://127.0.0.1:3002/${id}`, payload);
            getApiData()
        }catch(error){
            console.log(error)
        }
    }
    
    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
                <br></br>
                <button className='button is-success' onClick={handleSignupclick}>Add User</button>
                <div className="hero-body">
                    <div className="container">
                        <div className="has-text-centered">
                        <table className='table is-fullwidth'>
                    <thead>
                        <tr>
                        <th className='has-text-left'>Id</th> 
                        <th className='has-text-left'>S.No</th>
                        <th className='has-text-left'>Name</th>
                        <th className='has-text-left'>Email</th>
                        <th className='has-text-left'>Edit</th>
                        <th className='has-text-left'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((item, index) =>{
                                return (
                                    <tr key={item.id}>
                                    <td className='has-text-left'>{index + 1}</td>
                                    <td className='has-text-left'>{item.id}</td>
                                    <td className='has-text-left'>{item.fullName}</td>
                                    <td className='has-text-left'>{item.email}</td>
                                    <td className='has-text-left'><button className='button is-warning' onClick={() =>{handleEdit(item.id)}}>Edit</button></td>
                                    <td className='has-text-left'><button className='button is-danger'>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Welcome;
