import './Navbar.css'
import {NavLink}  from 'react-router-dom'
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

function Navbar() {

    const activeLink = 'nav-link nav-link-active'
    const normalLink = 'nav-link'

    const scrollTo = () => {
      window.scrollTo(0, 840)
    }

    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to='/' className='logo'>
                            <strong>My</strong> portfolio
                        </NavLink>

                        <BtnDarkMode/>

                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink to='/' onClick={scrollTo} className={({isActive}) => isActive ? activeLink : normalLink}>
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/skills' className={({isActive}) => isActive ? activeLink : normalLink}>
                                    Skills
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink : normalLink}>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar