import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Home</div>
                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li className="navbar-cart">
                        <span className="navbar-cart-icon">🛒</span>
                        <span className="navbar-cart-count">3</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;