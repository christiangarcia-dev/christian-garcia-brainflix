import './Navbar.scss'
import logoImage from '../../assets/logo/BrainFlix-logo.svg'
import uploadIcon from '../../assets/icons/upload.svg'
import searchIcon from '../../assets/icons/search.svg'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__flex-content">
                <NavLink to="/">
                    <img className="navbar__logo" src={logoImage} alt="BrainFlix Logo" href="#"></img>
                </NavLink>
                <div className="navbar__flex-sub-content">
                    <label className="navbar__search-label">
                        <img className='navbar__search-input-icon' src={searchIcon}></img>
                        <input className="navbar__search-input" placeholder="Search"></input>
                    </label>
                    <div className="navbar__avatar" alt="user avatar"></div>
                </div>
                <NavLink className="navbar__upload-button-link" to="/upload">
                    <button className="navbar__upload-button">
                    <img className='navbar__upload-button-icon' src={uploadIcon}></img>Upload</button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;