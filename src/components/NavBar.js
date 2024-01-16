import { Link } from 'react-router-dom';

const NavBar = () =>{
    
    return (
        <>
        <div>
            <Link to="/home">Home</Link>
        </div>
        <div>
            <Link to="/child">Child</Link>
        </div>
        </>
    )
}

export default NavBar;