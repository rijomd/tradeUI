import React from 'react';
import { Box } from '@mui/material';

import { WelcomePage } from '../components/WelcomePage';
import { AboutUs } from '../components/AboutUs';
import { Content } from '../components/Content';
import { ReviewPage } from '../components/ReviewPage';
import { Footer } from '../components/Footer';
import { ContactUs } from '../components/ContactUs';

import "../style/style.css";

const HomePage = () => {
    const sx = { marginTop: { sm: '32px', md: '64px' } };

    return (
        <>
            <Box>
                <WelcomePage />
            </Box>
            <AboutUs />
            <Box sx={sx}>
                <Content />
            </Box>
            <Box sx={sx}>
                <ContactUs />
            </Box>
            <ReviewPage />
            <Footer />
            <div style={{ height: "15vh" }}></div>
        </>
    )
}

export default HomePage;
