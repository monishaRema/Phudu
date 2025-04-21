import React from "react";
import { Link } from "react-router";

const Blog = () => {
  return (
    <section>
      <div className="my-container py-20">
        <h2 className="text-dark font-black text-4xl text-center">
          My Today Appointments
        </h2>
        <p className=" text-sm text-center mt-4 mb-8 max-w-[1000px] mx-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
        <div className="bg-gray-100 w-full rounded-lg shadow text-black p-8">
          <div className="flex items-center justify-between mb-4 ">
            <span className="">
              <h4 className="text-xl text-black font-bold mb-2">
                Dr. Cameron Williamson
              </h4>
              <p className="text-sm ">MBBS, MD - General Medicine, DNB</p>
            </span>
            <p className="text-sm ">MBBS, MD - General Medicine, DNB</p>

          </div>
          
          <div className="text-center mt-12 border-t border-gray-400 border-dashed ">
                <Link className='w-full inline-block py-3 px-8 text-xl font-bold text-center mt-5 border bg-transparent text-red-500 rounded-full transition ease-in-out duration-300 hover:text-white hover:bg-red-500'>View All Doctors</Link>
            </div>
               
        </div>
      </div>
    </section>
  );
};

export default Blog;
