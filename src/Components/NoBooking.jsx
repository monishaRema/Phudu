import React from 'react';
import { Link } from 'react-router';

const NoBooking = () => {
    return (
        <div className="bg-white w-full rounded-2xl text-black py-16 px-5 text-center">
            
                    <h2 className="text-3xl text-black font-bold mb-2">
                       You have not booked any appointment yet
                    </h2>
                    <p className="text-lg mb-6">Please book an appointment</p>
                    <Link className='px-8 py-3 font-bold text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300' to={'/'}>Book an Appointment</Link>
        </div>
    );
};

export default NoBooking;