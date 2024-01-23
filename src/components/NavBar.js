import { Link, useNavigate} from 'react-router-dom';

const NavBar = () =>{
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const handelLogout = () =>{
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
            <div className='navbar-item'>
                <Link to="/counter">Counter</Link>
            </div>
            <div className='navbar-end'>
                <button className='button is-primary' onClick={handelLogout}>Logout</button>
            </div>
        </nav>}
        </>
    )
}

export default NavBar;