import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-5 h-5 mr-2" />
                <h1 className="text-white font-bold text-xl">SCENTS BY PRIO</h1>
            </div>
            <ul className="">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
