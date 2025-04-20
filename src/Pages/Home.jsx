import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Components/Doctors';

const Home = () => {
    const doctors = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <Doctors doctors={doctors}></Doctors>
        </>
    );
};

export default Home;