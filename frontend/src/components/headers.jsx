import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const headers = () => {
  return (
    <header className="header">
        <div className="logo">
            <Link to="/">
                Goal Setter
            </Link>
        </div>
        <ul>
            <li>
                <Link to="/login">
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <FaUser /> Register
                </Link>
            </li>
            <li>
                <Link to="/login">
                    <FaSignInAlt />
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default headers
