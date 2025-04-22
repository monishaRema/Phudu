import React from "react";
import { CgDanger } from "react-icons/cg";
import { RiRegisteredLine } from "react-icons/ri";
import { Link, useLoaderData, useLocation, useNavigate, useParams } from "react-router";
import { setDataToDB } from "../Utility/Utility";

const DoctorCard = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const idFromPath = location.pathname.split("/")[2];

  const { id } = useParams();
  const newId = id ? id : idFromPath
  const allDoctors = useLoaderData();
  const doctorDetails = allDoctors.find((doctor) => doctor.id == id);
  const { name, education, registration, availability, works, fee, image } =
    doctorDetails;

  return (
    <section className="doctor-details py-20">
      <div className="my-container">
        <div className="doctor-info bg-white w-full rounded-3xl text-center text-black p-18 mb-8">
          <h1 className="text-dark font-black text-4xl text-center">
            Doctor’s Profile Details
          </h1>
          <p className=" text-center mt-4 max-w-[1000px] mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>

        <div className="doctor-card p-14 rounded-2xl bg-white flex flex-col lg:flex-row lg:items-center gap-8 text-center lg:text-left">
          <div className="img-box rounded-xl overflow-hidden w-full lg:w-4/12 max-h-[450px]">
            <img
              className="size-full object-cover max-h-[450px]"
              src={image}
              alt={name + " Doctor"}
            />
          </div>
          <div className="content-box w-full  lg:w-8/12">
            <h2 className="text-2xl text-dark font-black mt-4 mb-3">{name}</h2>
            <p className="text-lg font-medium uppercase mb-3">
              {education.field}
              <br></br>
              {education.institution}
            </p>
            <div>
              <span className=" text-xl font-medium">Working At</span>
              <br></br>
              <p className="text-xl font-bold text-dark mt-2">{works}</p>
            </div>
            <div className="border-t border-b border-dashed border-gray-300 mt-4 py-4">
              <p className="text-lg font-medium flex gap-2 lg:items-center justify-center lg:justify-start">
                {" "}
                <RiRegisteredLine className="size-6"></RiRegisteredLine>
                {registration}{" "}
              </p>
            </div>
            <div className="meta flex gap-4 text-sm font-medium my-6 items-center flex-wrap justify-center lg:justify-start">
              <span className="text-xl font-bold text-dark">Availability</span>
              <div className="flex gap-4">
                {availability.map((day, i) => (
                  <span
                    key={i}
                    className="bg-[#FFA00010] border border-[#FFA000] text-[#FFA000] px-4 py-2 rounded-full"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
            <p className="fee flex gap-2 text-base justify-center lg:justify-start flex-wrap">
              <span className="text-base font-black text-dark">
                Consultation Fee:
              </span>
              <span className="text-blue-500 font-bold">{fee}</span>
              <span className="text-gray-400">(incl. Vat)</span>
              <span className="text-blue-500">Per consultation</span>
            </p>
          </div>
        </div>

        <div className="bg-white w-full rounded-2xl  text-black p-8 mt-6">
          <h2 className="text-center text-2xl text-dark font-black mt-4 mb-3">
            Book an Appointment
          </h2>
          <div className="text-center mt-6 border-t border-dashed pt-4 border-gray-300 flex gap-8 items-center justify-between">
            <span className="text-lg font-bold">Availability</span>
            <span className="px-4 py-2 rounded-full bg-[#09982F10] border border-[#09982F20] text-green">
              Available Today
            </span>
          </div>
          <div className="text-center mt-6 border-t pt-4 border-gray-200">
          
              <p className=" bg-[#FFA00015] text-[#FFA000] p-3 px-4 rounded-full mb-10">
                <span className="inline">
                  <CgDanger size={28} className="inline"></CgDanger>
                </span>
                <span> </span>
                <span className="inline">
                Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
                </span>
               
              </p>
            
            <button
              onClick={() => setDataToDB(newId, name, navigate)}
              className="block py-4 px-8 w-full font-bold text-lg md:text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorCard;
