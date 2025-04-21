import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ErrorImg from '../assets/vecteezy_purple-christmas-bulb_18938521.jpg';
import { Link } from 'react-router';

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className='py-24'>
                <div className="my-container">
                    <div className="error-page text-center">
                        <img className='max-w-[570px] mx-auto rounded-2xl mb-5' src={ErrorImg} alt="" />
                        <h1 className='text-red-400 text-4xl m1-10'>Page Not Found</h1>
                        <p className='my-3 text-lg text-black'>Sorry, the page you are looking for does not exist.</p>
                        <Link className='text-purple-400 font-bold text-xl' to={'/'}>Go Home</Link>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Error;