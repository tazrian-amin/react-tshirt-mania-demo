import logo from '../../logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/shop">Shop</NavLink>
                <NavLink className='nav-link' to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;