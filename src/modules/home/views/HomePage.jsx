import React from 'react';
import { Box } from '@mui/material';

import { WelcomePage } from '../components/WelcomePage';
import { AboutUs } from '../components/AboutUs';
import { Content } from '../components/Content';

import { ReviewPage } from '../components/ReviewPage';
import { Footer } from '../components/Footer';

import facebookColor from 'assets/icons/facebookColor.svg';
import youtubeColor from 'assets/icons/youtubeColor.svg';
import instagramColor from 'assets/icons/instagramColor.svg';
import linkedInColor from 'assets/icons/linkedInColor.svg';

import facebook from 'assets/icons/facebookWhite.svg';
import instagram from 'assets/icons/instagramWhite.svg';
import linkedIn from 'assets/icons/linkedInWhite.svg';
import youtube from 'assets/icons/youtubeWhite.svg';

import "../style/style.css";

const HomePage = () => {
    const sx = { marginTop: { sm: '32px', md: '64px' } };

    const iconMap = {
        facebook: facebook,
        instagram: instagram,
        linkedIn: linkedIn,
        youtube: youtube,
        instagramColor: instagramColor,
        facebookColor: facebookColor,
        linkedInColor: linkedInColor,
        youtubeColor: youtubeColor,
    };


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
                <ReviewPage />
            </Box>
            <Box sx={sx}>
                <Footer iconMap={iconMap} />
            </Box>
            <div style={{ height: "15vh" }}></div>
        </>
    )
}

export default HomePage;
