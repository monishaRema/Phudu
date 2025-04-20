import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className='py-24'>
                <div className="my-container">
                    <div className="error-page">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>Sorry, the page you are looking for does not exist.</p>
                        <a href="/">Go to Home</a>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Error;