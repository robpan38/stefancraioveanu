import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBarWrapper">
            <div className="menuWrapper">
                <Link style={{color: "white", textDecoration: "none"}} to="/">
                    <p>Home</p>
                </Link>
                <Link style={{color: "white", textDecoration: "none"}} to="/directing">
                    <p>Directing</p>
                </Link>
                <Link style={{color: "white", textDecoration: "none"}} to="/sound">
                    <p>Sound</p>
                </Link>
                <Link style={{color: "white", textDecoration: "none"}} to="/showreels">
                    <p>Showreels</p>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;