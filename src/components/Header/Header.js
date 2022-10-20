import logo from '../../logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
    const navLinks = ['Home', 'Shop', 'Contact'];
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} alt="logo" />
            </div>
            <div>
                {
                    navLinks.map((navLink, idx) => <NavLink
                        key='idx'
                        className='nav-link'
                        to={navLink.toLowerCase()}
                        style={({ isActive }) =>
                            isActive ? { color: 'orange' } : undefined
                        }
                    >{navLink}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Header;