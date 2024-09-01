import React from 'react';
import { Box } from '@mui/material';

import { WelcomePage } from '../components/WelcomePage';
import { AboutUs } from '../components/AboutUs';
import { Content } from '../components/Content';
import { ReviewPage } from '../components/ReviewPage';
import { Footer } from '../components/Footer';
import { ContactUs } from '../components/ContactUs';
import { NewsSection } from '../components/NewsSection';

import "../style/style.css";

const HomePage = () => {
    const sx = { marginTop: { xs: '48px', sm: '48px', md: '64px' } };

    return (
        <>
            <WelcomePage />
            <Box sx={sx}>
                <NewsSection />
            </Box>
            <AboutUs />
            <Box sx={sx}>
                <Content />
            </Box>
            <Box sx={sx}>
                <ContactUs />
            </Box>
            <Box sx={sx}>
                <ReviewPage />
            </Box>
            <Box sx={sx}>
                <Footer />
            </Box>

            <div style={{ height: "20vh" }}></div>
        </>
    )
}

export default HomePage;
