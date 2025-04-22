import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialLinkedin } from 'react-icons/ti';
import { BsTwitterX } from 'react-icons/bs';
import { FaCirclePlay } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="my-footer py-24">
        <div className="my-container">
            <div className="flex flex-col items-center gap-8 ">
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
                
            </div>
            <div className="border-t border-[#0F0F0F20] max-w-[1060px] mx-auto my-8"></div>
                <div className="buttons flex gap-6 items-center justify-center">
                    <Link to={'https://www.facebook.com/'} target='_blank' >
                        <FaFacebook className='size-9 text-blue-500'></FaFacebook>
                    </Link>

                    <Link  to={'https://x.com/'} target='_blank' className='size-9 bg-gray-800 rounded-full text-white flex-center'>

                     <BsTwitterX className='text-xl'></BsTwitterX>

                    </Link>

                    

                    <Link to={'https://linkedin.com/'} target='_blank'  className='size-9 bg-[#0575B3] rounded-full text-white flex-center'>
                    <TiSocialLinkedin className='text-3xl'></TiSocialLinkedin>

                    </Link>
                    <Link to={'https://youtube.com'} target='_blank' >
                    <FaCirclePlay className='size-9 text-[#ff0000]'></FaCirclePlay>
                    </Link>
                    

                </div>
           
        </div>
    </footer>
    );
};

export default Footer;