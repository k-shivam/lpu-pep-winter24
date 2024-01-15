import { Link, useNavigate} from 'react-router-dom';

const NavBar = (props) =>{
    const navigate = useNavigate()
    const {hideNavBar} = props;

    const handelLogout = () =>{
        navigate("/")
        hideNavBar()
    }

    return (
        <nav className='navbar'>
            <div className='navbar-item'>
                <Link to="/">Home</Link>
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
        </nav>
    )
}

export default NavBar;