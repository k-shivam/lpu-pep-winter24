import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) =>{
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const handleClick = () =>{
        localStorage.clear()
        navigate("/home")
    }

    return (
        <>
        {token &&
        <nav className='navbar'>
        <div className='navbar-item'>
            <Link to="/home">Home</Link>
        </div>
        <div className='navbar-item'>
            <Link to="/about">About</Link>
        </div>
        <div className='navbar-end'>
            <button className='button is-primary' onClick={handleClick}>Logout</button>
        </div>
        </nav>}
        </>
    )
}

export default NavBar;