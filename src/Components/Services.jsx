import React from 'react';
import successIcon from '../assets/success-doctor.png';        
import reviewIcon from '../assets/success-review.png';
import pationsIcon from '../assets/success-patients.png';        
import stafsIcon from '../assets/success-staffs.png';        


const Services = () => {
    return (
       <section className="services">
        <div className="my-container">
        <h2 className='text-dark font-black text-4xl text-center'>We Provide Best Medical Services</h2>
                <p className=' text-center mt-4 mb-8 max-w-[1000px] mx-auto'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="doctor-card p-8 rounded-2xl bg-white ">
                            <img className='mb-4  w-[64px]' src={successIcon} alt="" />
                            <h2 className='text-3xl font-bold text-black mb-3'>199+</h2>
                            <p className='text-2xl font-semibold text'>Total Doctors</p>

                        </div>
                        <div className="doctor-card p-8 rounded-2xl bg-white ">
                        <img className='mb-4 w-[64px]' src={reviewIcon} alt="" />
                            <h2 className='text-3xl font-bold text-black mb-3'>199+</h2>
                            <p className='text-2xl font-semibold text'>Total Reviews</p>

                        </div>
                        <div className="doctor-card p-8 rounded-2xl bg-white ">
                        <img className='mb-4 w-[64px]' src={pationsIcon} alt="" />
                            <h2 className='text-3xl font-bold text-black mb-3'>199+</h2>
                            <p className='text-2xl font-semibold text'>Patients</p>

                        </div>
                        <div className="doctor-card p-8 rounded-2xl bg-white ">
                        <img className='mb-4 w-[64px]' src={stafsIcon} alt="" />
                        <h2 className='text-3xl font-bold text-black mb-3'>199+</h2>
                        <p className='text-2xl font-semibold text'>Total Stuffs</p>
                        </div>
                </div>
        </div>
       </section>
    );
};

export default Services;