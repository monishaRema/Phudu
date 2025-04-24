import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import Doctors from "../Components/Doctors";
import Services from "../Components/Services";

const Home = () => {
  useEffect(() => {
    document.title = "Phudu | Home";
  }, []);

  const doctors = useLoaderData();
  const [doctorsData, setDoctorData] = useState(doctors);
  const [searchText, setSearchText] = useState('')

  const handleSearchBtn = (e, text) => {
    e.preventDefault();
    const searhedDoctors = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(text.toLowerCase())
    );
    setDoctorData(searhedDoctors);
    setSearchText('')

    window.scrollTo({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  };

  const showDoctorData = doctorsData.length > 0 ? doctorsData : doctors;

  return (
    <>
      <Banner handleSearchBtn={handleSearchBtn} searchText={searchText} setSearchText={setSearchText}></Banner>

      <Doctors doctors={showDoctorData}></Doctors>
      <Services></Services>
    </>
  );
};

export default Home;
