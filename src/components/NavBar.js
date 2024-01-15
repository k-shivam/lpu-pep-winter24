import { Link } from 'react-router-dom';

const NavBar = () =>{
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
                <button className='button is-primary'>Logout</button>
            </div>
        </nav>
    )
}

export default NavBar;