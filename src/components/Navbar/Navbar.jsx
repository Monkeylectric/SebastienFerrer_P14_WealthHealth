import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from "../../assets/logo.webp";

/**
 * Component which displays 
 * navbar in page top
 * 
 * @returns navbar component
 */
function Navbar() {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Wealth Health Logo" />
            </NavLink>
            <ul className="main-nav-links">
                <li className="navbar-link-item"><NavLink to="/">Créer un employé</NavLink></li>
                <li className="navbar-link-item"><NavLink to="/list">Liste des employés</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;