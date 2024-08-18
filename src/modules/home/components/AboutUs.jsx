import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const AboutUs = () => {
    const theme = useTheme();

    return (
        <Container className='about-us-home'>
            <Box sx={{ border: `1px solid ${theme.palette.secondary.light}`, borderRadius: '8px' }}>
                <Typography variant='h1' className='header' color={theme.palette.grey[50]}> to know more...</Typography>
            </Box>
        </Container>
    )
}
