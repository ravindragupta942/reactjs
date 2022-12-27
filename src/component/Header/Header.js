import './Header.css';
import { Link } from 'react-router-dom';


function Header() {

    return (
        <div className="home">
            <ul>
                <li><Link to="/home">Home </Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
        </div>
    );
}

export default Header;
