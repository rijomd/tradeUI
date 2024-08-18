import React from 'react';
import { WelcomePage } from '../components/WelcomePage';
import { AboutUs } from '../components/AboutUs';

import "../style/style.css";

const HomePage = () => {
    return (
        <>
            <WelcomePage />
            <AboutUs />
            <div style={{ height: "15vh" }}></div>
        </>
    )
}

export default HomePage;
