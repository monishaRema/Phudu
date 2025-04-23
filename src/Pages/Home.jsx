import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Components/Doctors';
import Services from '../Components/Services';


const Home = () => {
 
    useEffect(() => {
        document.title = 'Phudu | Home'
    }, [])
   
    const doctors = useLoaderData();
    const [doctorsData,setDoctorData] = useState(doctors);


    const handleSeachBtn = (e,text)=>{
        e.preventDefault();
        const searhedDoctors = doctors.filter(doctor=>doctor.name.toLowerCase().includes(text.toLowerCase()));
        setDoctorData(searhedDoctors);
       
    }
    // console.log(doctorsData);
    return (
        <>
            <Banner handleSeachBtn={handleSeachBtn}></Banner>

            <Doctors doctors={doctors}></Doctors>
            <Services></Services>
        </>
    );
};

export default Home;