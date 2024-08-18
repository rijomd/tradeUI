import React from 'react';
import { Box } from '@mui/material';

import { WelcomePage } from '../components/WelcomePage';
import { AboutUs } from '../components/AboutUs';
import { Content } from '../components/Content';

import "../style/style.css";
import { ReviewPage } from '../components/ReviewPage';

const HomePage = () => {
    return (
        <>
            <Box>
                <WelcomePage />
            </Box>
            <AboutUs />
            <Box sx={{ marginTop: { sm: '32px', md: '64px' } }}>
                <Content />
            </Box>
            <Box sx={{ marginTop: { sm: '32px', md: '64px' } }}>
                <ReviewPage />
            </Box>
            <div style={{ height: "15vh" }}></div>
        </>
    )
}

export default HomePage;
