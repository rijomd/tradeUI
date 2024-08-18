import React from 'react';
import Lottie from 'lottie-react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import welcomeImage from "assets/images/welcome.jpeg"
import WelcomeContent from 'assets/lottifyAnimations/WelcomeContent.json';
import growiseStartLogo from "assets/images/growiseStartLogo.png"

export const WelcomePage = () => {
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: WelcomeContent,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Box className="welcome-container" sx={{ backgroundImage: `url(${welcomeImage})`, }}>
            <Box className="lottie-container" >
                <Lottie
                    animationData={defaultOptions.animationData}
                    loop={defaultOptions.loop}
                    autoplay={defaultOptions.autoplay}
                    height="100%"
                    width="100%"
                    className='lottie-content'
                />
            </Box>
            <Box className="welcome-image-container" sx={{ backgroundImage: `url(${growiseStartLogo})`, }}>
                <Typography variant="h2" component="div">Welcome to</Typography>
                <button style={{ color: theme.palette.secondary[200] }} className='welcome-button'>Let get started</button>
            </Box>
        </Box>
    )
}
