import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getDataFromDB } from "../Utility/Utility";
import Booking from "../Components/Booking";
import { Slide, toast } from "react-toastify";
import NoBooking from "../Components/NoBooking";
import MyBarChart from "../Components/BarChart";

const MyBookings = () => {
  const allDoctors = useLoaderData();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const bookingData = getDataFromDB();
    const convertedListData = bookingData.map((id) => parseInt(id));
    const myBooking = allDoctors.filter((doctor) =>
      convertedListData.includes(doctor.id)
    );

    setBooking(myBooking);
  }, []);

  const handleDelete = (id) => {
    const remaining = booking.filter((doctor) => doctor.id !== id);
    setBooking(remaining);

    const bookingData = getDataFromDB();
    const convertedListData = bookingData.map((id) => parseInt(id));
    const newBookingData = convertedListData.filter((doctor) => doctor !== id);
    const data = JSON.stringify(newBookingData);
    localStorage.setItem("booking", data);
    toast.warning("Your appointment cancelled successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <section className="my-bookings py-20">
      <div className="my-container">
        {booking.length > 0 && (
          <div className="chart bg-white w-full rounded-2xl text-black p-12 mb-8">
            <MyBarChart doctors={booking}></MyBarChart>
          </div>
        )}

        <div className="my-bookings-info">
          <h1 className="text-dark font-black text-4xl text-center">
            My Today Appointments
          </h1>
          <p className=" text-center mt-4 max-w-[1000px] mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        <div className="booking-container flex flex-col gap-8 mt-8">
          {booking.length > 0 ? (
            booking.map((doctor) => (
              <Booking
                key={doctor.id}
                doctor={doctor}
                handleDelete={handleDelete}
              ></Booking>
            ))
          ) : (
            <NoBooking></NoBooking>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyBookings;
