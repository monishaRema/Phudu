import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);

    const navClass = navOpen ? 'top-19 opacity-100 visible transition-all duration-300 ease-in-out' : 'top-25 opacity-0 invisible pointer-events-none transition-all duration-300 ease-in-out';

    return (
        <header className="header relative">
            <div className="my-container">
                <div className="flex justify-between items-center py-5">
                    <Link to="/" className='flex items-center gap-2' >
                        <img className='size-10 md:size-12' src={Logo} alt="Logo" />
                        <h3  className="text-3xl font-black text-dark" >Phudu</h3>
                    </Link>
                    <nav className='hidden lg:block'>
                        <ul className="flex gap-8 items-center">
                          <li><NavLink to={'/'} className='navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Home</NavLink></li>
                          <li><NavLink to={'my-bookings'} className='navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>My-Bookings</NavLink></li>
                          <li><NavLink to={'blogs'} className='navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Blogs</NavLink></li>
                          <li><NavLink to={'contact'} className='navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Contact Us</NavLink></li>
                        </ul>
                    </nav>

                    <button className='hidden lg:inline-block px-7 py-4 font-bold text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300'>Emergency</button>

                    <button
                    onClick={() => setNavOpen(!navOpen)}
                    className='lg:hidden block text-3xl text-gray-700 hover:text-blue-500 transition-all ease-in-out duration-300 bg-white p-3 rounded-lg cursor-pointer'>
                        {
                            navOpen ?   <IoMdClose></IoMdClose> : <HiMiniBars3CenterLeft className='rotate-180'/>
                        }
                       
                    </button>
                    
                    <nav className={`block lg:hidden absolute right-0 z-50 w-[300px] py-3 px-5 shadow bg-linear-to-t from-[#ffffff] to-gray-200 rounded-b-lg border-3 border-white ${navClass}`}>
                        <ul className="flex flex-col gap-4">
                          <li><NavLink to={'/'} className='navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Home</NavLink></li>
                          <li><NavLink to={'my-bookings'} className='navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>My-Bookings</NavLink></li>
                          <li><NavLink to={'blogs'} className='navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Blogs</NavLink></li>
                          <li><NavLink to={'contact'} className='navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300'>Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;