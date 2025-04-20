import React from 'react';

const Services = () => {
    return (
       <section className="services">
        <div className="my-container">
        <h2 className='text-dark font-black text-4xl text-center'>We Provide Best Medical Services</h2>
                <p className=' text-center mt-4 mb-8 max-w-[1000px] mx-auto'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="doctor-card p-8 rounded-2xl bg-white ">
                            <img src="" alt="" />
                            <h2 className='text-2xl font-bold'>1000</h2>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>

                        </div>
                        <div className="doctor-card p-8 rounded-2xl bg-white "></div>
                        <div className="doctor-card p-8 rounded-2xl bg-white "></div>
                        <div className="doctor-card p-8 rounded-2xl bg-white "></div>
                </div>
        </div>
       </section>
    );
};

export default Services;