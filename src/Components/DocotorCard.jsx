import React from 'react';

const DocotorCard = () => {
    return (
       <section>
        <div className="my-container">
            <div className="flex">
                <div className="doctor-img">
                   
                </div>
                <div className="doctor-info">
                    <h2 className='text-dark font-black text-4xl text-center'>Our Best Doctors</h2>
                    <p className=' text-center mt-4 mb-8 max-w-[1000px] mx-auto'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                 </div>
            </div>
        </div>
       </section>
    );
};

export default DocotorCard;