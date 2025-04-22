import React from 'react';
import { Link, useLocation } from 'react-router';

const ErrorDoctor = () => {
    const location = useLocation();
    const locationData = location.pathname.split('/').pop(); 
   
    return (
        <section className='pt-25'>
            <div className="my-container">
                <div className="error-box bg-white rounded-2xl text-black py-16 px-5 text-center">
                    <h2 className='text-3xl text-black font-bold mb-3'>
                        No Doctor found
                    </h2>
                    <p className='text-lg mb-6 text-gray-500'>No doctor found with the name or registration no <br></br> '{locationData}'</p>
                    <Link className='px-8 py-3 font-bold text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300' to={'/'}>View All Doctors</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorDoctor;