import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import welcomeImage from "assets/images/welcome.jpeg"
import WelcomeContent from 'assets/lottifyAnimations/WelcomeContent.json';
import growiseStartLogo from "assets/images/growiseStartLogo.png"

export const WelcomePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const loginButtonRef = useRef(null);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: WelcomeContent,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleScroll = () => {
        if (loginButtonRef?.current) {
            const { top, bottom } = loginButtonRef.current.getBoundingClientRect();
            const isVisible = bottom > 0 && top < window.innerHeight;
            const button = document.getElementById('let-get-started-id');
            if (button) {
                if (!isVisible) {
                    button.style.display = "block";
                } else {
                    button.style.display = "none";
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <button
                    ref={loginButtonRef}
                    style={{ color: theme.palette.secondary[200] }}
                    className='welcome-button'
                    onClick={() => { navigate("/login"); }}
                >
                    Let get started
                </button>
            </Box>
        </Box>
    )
}
