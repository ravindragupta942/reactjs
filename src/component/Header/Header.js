import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <div>
            <ul>
                <li> <Link to="/Home">Home</Link></li>
                <li> <Link to="/SignUp">SignUp</Link></li>
            </ul>
        </div>
    );
}
export default Header;