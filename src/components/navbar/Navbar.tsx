import React from "react";
import './Navbar.css'
import { NavLink }  from 'react-router-dom'
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

const activeLink: string = 'nav-link nav-link-active'
const normalLink: string = 'nav-link'

const scrollTo = (): void => {
    window.scrollTo(0, 840)
}

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to='/react-portfolio' className='logo'>
                            <strong>My</strong> portfolio
                        </NavLink>

                        <BtnDarkMode/>

                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink to='/react-portfolio' onClick={scrollTo} className={({isActive}) => isActive ? activeLink : normalLink}>
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