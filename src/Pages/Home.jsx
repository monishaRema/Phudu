import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Components/Doctors';
import Services from '../Components/Services';

const Home = () => {
   
    const doctors = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <Doctors doctors={doctors}></Doctors>
            <Services></Services>
        </>
    );
};

export default Home;