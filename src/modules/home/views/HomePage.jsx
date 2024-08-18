import React from 'react';
import { Box } from '@mui/material';

import { WelcomePage } from '../components/WelcomePage';
import { AboutUs } from '../components/AboutUs';

import "../style/style.css";

const HomePage = () => {
    return (
        <>
            <Box >
                <WelcomePage />
            </Box>
            <AboutUs />
            <div style={{ height: "15vh" }}></div>
        </>
    )
}

export default HomePage;
