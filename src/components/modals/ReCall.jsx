import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Lottie from 'lottie-react';

import Content from 'assets/lottifyAnimations/popup.json';
import { ModalPage } from './ModalPage';

export const ReCall = ({ isOpen, handleClose }) => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: Content,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <>
            <ModalPage maxWidth="xs" open={isOpen} handleClose={handleClose}>
                <Grid container spacing={2}>
                    <Grid item md={12} lg={12} xs={12}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Lottie
                                animationData={defaultOptions.animationData}
                                loop={defaultOptions.loop}
                                autoplay={defaultOptions.autoplay}
                                height="100%"
                                width="100%"
                                className='recall-content'
                                speed={0.1}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={12} xs={12}>
                        <Typography sx={{ textAlign: "center" }} variant='h4'>Welcome to growwise! Enjoy your experience!</Typography>
                    </Grid>
                </Grid>
            </ModalPage>
        </>
    )
}
