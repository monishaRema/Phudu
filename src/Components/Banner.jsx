import React, { useState } from "react";
import bannerImg1 from "../assets/labor-union-members-working-together.jpg";
import bannerImg2 from "../assets/team-young-specialist-doctors-standing-corridor-hospital.jpg";

const Banner = ({handleSeachBtn}) => {

  const[searchText, setSearchText] = useState('');

  

  return (
    <section className="banner py-5">
      <div className="my-container ">
        <div className="bg-linear-to-t from-[#ffffff] to-[#ffffff05] px-10 md:px-25 py-10 rounded-3xl border-3 border-white">
        <h1 className="text-dark font-black text-3xl md:text-4xl lg:text-5xl text-center mt-10 max-w-[920px] mx-auto">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className=" text-center mt-4  max-w-[920px] mx-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <div className="max-w-[920px] mx-auto my-6">
          <form onSubmit={e=>handleSeachBtn(e,searchText)} className="flex items-center gap-2 flex-col lg:flex-row justify-center">
            <input
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
              className="w-full lg:w-9/12 px-8 py-3 bg-gray-100 rounded-full border border-gray-300 outline-0 text-black"
              type="text"
              id="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className=" w-full lg:w-3/12 px-8 py-3 font-bold text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300"
            >
              Search Now
            </button>
          </form>
        </div>
        <div className="flex gap-4 justify-center items-center my-5 flex-col lg:flex-row">
            <div className="img-box w-full lg:w-6/12 rounded-3xl overflow-hidden">
            <img className="max-w-full object-contain " src={bannerImg1} alt="" />
            </div>
            <div className="img-box w-full lg:w-6/12 rounded-3xl overflow-hidden">
            <img className="max-w-full object-contain  " src={bannerImg2} alt="" />
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
