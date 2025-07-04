import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import { Link } from 'react-router';

const Doctors = ({doctors}) => {

const [displayDoctors, setDisplayDoctors] = useState([]);

const[viewAll, setviewAll] = useState(false);

    useEffect(() => {
        if(viewAll){
            setDisplayDoctors(doctors)
        }else{
            setDisplayDoctors(doctors.slice(0, 6))
        }

        
    }, [doctors, viewAll]);
  

    return (
        <section className="doctors py-20">
            <div className="my-container">
                <h2 className='text-dark font-black text-3xl md:text-4xl text-center'>Our Best Doctors</h2>
                <p className=' text-center mt-4 mb-8 max-w-[1000px] mx-auto'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
          
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                 
                    {
                        displayDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </div>
                <div onClick={()=>{
                     setviewAll(prev=> !prev)
                     if(viewAll) window.scrollTo(0, 800)
                }} className="text-center mt-12">
                <Link className=' inline-block py-3 px-8 text-xl font-bold text-center  border  text-white bg-blue-500 rounded-full transition ease-in-out duration-300 hover:bg-transparent hover:text-blue-500'>{viewAll ? 'All Doctors':'View All Doctors'}</Link>
                </div>
               
            </div>
        </section>
    );
};

export default Doctors;