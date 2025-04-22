import React from 'react';
import { Link } from 'react-router';

const Booking = ({doctor, handleDelete}) => {
    return (
        <div className="bg-white w-full rounded-2xl text-black p-8">
        <div className="flex items-center justify-between mb-4 ">
          <div>
          <h4 className="text-xl text-black font-bold mb-2">
              {doctor.name}
            </h4>
            <p className="text-sm ">{doctor.education.field} - {doctor.education.institution}</p>
          </div>
            
          
          <p className="text-lg text-gray-500 font-medium">Appointment Fee : <span>{doctor.fee} </span> +Vat</p>

        </div>
        
        <div className="text-center mt-12 border-t border-gray-400 border-dashed ">
              <button
              onClick={()=>handleDelete(doctor.id)}
              className='w-full inline-block py-3 px-8 text-xl font-bold text-center mt-5 border bg-transparent text-red-500 rounded-full transition ease-in-out duration-300 hover:text-white hover:bg-red-500'>Cancel Appointment</button>
          </div>
             
      </div>
    );
};

export default Booking;