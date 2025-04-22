import React from "react";
import { Link } from "react-router";

const Booking = ({ doctor, handleDelete }) => {
  return (
    <>
      <div className="my-bookings-info mt-25 mb-8">
        <h1 className="text-dark font-black text-3xl md:text-4xl text-center">
          My Today Appointments
        </h1>
        <p className=" text-center mt-4 max-w-[1000px] mx-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="booking-container flex flex-col gap-8 mt-8">
        <div className="bg-white w-full rounded-2xl text-black p-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-4 ">
            <div>
              <h4 className="text-xl text-black font-bold mb-2">
                {doctor.name}
              </h4>
              <p className="text-sm ">
                {doctor.education.field} - {doctor.education.institution}
              </p>
            </div>

            <p className="text-lg text-gray-500 font-medium">
              Appointment Fee : <span>{doctor.fee} </span> +Vat
            </p>
          </div>

          <div className="text-center mt-12 border-t border-gray-400 border-dashed ">
            <button
              onClick={() => handleDelete(doctor.id)}
              className="w-full inline-block py-3 px-8 text-lg md:text-xl font-bold text-center mt-5 border bg-transparent text-red-500 rounded-full transition ease-in-out duration-300 hover:text-white hover:bg-red-500"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
