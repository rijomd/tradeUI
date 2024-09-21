import React from 'react';
import IMAGE from 'assets/images/reviewImage.jpg';
import { Box, Typography } from '@mui/material';

export const ProfileSection = () => {
    return (
        <Box className="profile-section">
            <img src={IMAGE} />
            <Typography variant='subtitle1'>User Name</Typography>
        </Box>
    )
}
