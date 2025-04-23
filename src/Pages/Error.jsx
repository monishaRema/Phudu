import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ErrorImg from '../assets/vecteezy_purple-christmas-bulb_18938521.jpg';
import { Link } from 'react-router';

const Error = () => {
       useEffect(()=> {
          document.title = 'Page not Found | Phudu'
       },[])
    return (
        <>
            <Navbar></Navbar>
            <main className='py-24'>
                <div className="my-container">
                    <div className="error-page text-center">
                        <div className="img-box max-w-[600px] mx-auto rounded-2xl mb-5 overflow-hidden p-10 bg-white">
                        <img className='max-w-full' src={ErrorImg} alt="" />
                        </div>
                        
                        <h1 className='text-red-400 text-4xl mt-10'>Page Not Found</h1>
                        <p className='mt-3 mb-10 text-lg text-black'>Sorry, the page you are looking for does not exist.</p>
                        <Link className='px-8 py-3 font-bold text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300' to={'/'}>Go Home</Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Error;