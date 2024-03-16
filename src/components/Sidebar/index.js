import { Link, NavLink } from 'react-router-dom'
import './index.scss'
// import LogoS from '../../assets/images/logo-s.png'
import LogoA from '../../assets/images/logo_A-removebg.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import faLinkedIn from '../../assets/images/faLinkedIn.webp'
import faGitHub from '../../assets/images/faGitHub.png'

const Sidebar =() => (
    <div className='nav-bar'>
        <Link className ='logo' to='/'>
            <img src={LogoA} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" /> 
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" /> 
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" /> 
            </NavLink>
        </nav>
        <ul>
            <li>
                <Link className ='linkedIn' target="_blank" to='https://linkedin.com/in/abiye-berhanu/'>
                    <img src={faLinkedIn} alt="logo" />
                </Link>
            </li>
            <li>
                <Link className ='gitHub' target="_blank" to='https://github.com/aberhanu'>
                    <img src={faGitHub} alt="logo" />
                </Link>
            </li>
        </ul>

    </div>

)

export default Sidebar