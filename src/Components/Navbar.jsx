import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <header className="header">
            <div className="my-container">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className='flex items-center gap-2' >
                        <img className='size-12' src={Logo} alt="Logo" />
                        <h3  className="text-3xl font-black text-dark" >Phudu</h3>
                    </Link>
                    <nav>
                        <ul className="flex gap-8 items-center">
                          <li><NavLink to={'/'} className='navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Home</NavLink></li>
                          <li><NavLink to={'my-bookings'} className='navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>My-Bookings</NavLink></li>
                          <li><NavLink to={'blogs'} className='navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Blogs</NavLink></li>
                          <li><NavLink to={'contact'} className='navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Contact Us</NavLink></li>
                        </ul>
                    </nav>
                    <button className='px-7 py-4 font-bold text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300'>Emergency</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;