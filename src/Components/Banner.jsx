import React, { useState } from "react";
import bannerImg1 from "../assets/labor-union-members-working-together.jpg";
import bannerImg2 from "../assets/team-young-specialist-doctors-standing-corridor-hospital.jpg";

const Banner = ({handleSeachBtn}) => {

  const[searchText, setSearchText] = useState('');

  

  return (
    <section className="banner">
      <div className="my-container ">
        <div className="bg-gray-150 max-w-[1180px] mx-auto px-25 py-10 rounded-3xl border border-gray-50">
        <h1 className="text-dark font-black text-5xl text-center mt-10 max-w-[920px] mx-auto">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className=" text-center mt-4  max-w-[920px] mx-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <div className="max-w-[920px] mx-auto my-6">
          <form onSubmit={e=>handleSeachBtn(e,searchText)} className="flex items-center gap-2 ">
            <input
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
              className="w-full px-5 py-3 bg-gray-100 rounded-full border border-gray-300 outline-0 text-black"
              type="text"
              id="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-gray-700 text-white rounded border-0 outline-0"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex gap-4 justify-center items-center my-5 ">
            <img className="max-w-[530px] object-contain rounded-3xl " src={bannerImg1} alt="" />
            <img className="max-w-[530px] object-contain rounded-3xl " src={bannerImg2} alt="" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
