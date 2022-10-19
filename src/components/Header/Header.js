import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/shop">Shop</NavLink>
            <NavLink className='nav-link' to="/contact">Contact</NavLink>
        </div>
    );
};

export default Header;