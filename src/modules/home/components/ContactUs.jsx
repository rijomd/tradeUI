import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ContactUsForm } from '../forms/ContactUsForm';
import logo from "assets/images/aboutLogo.jpg";
import contactImage from "assets/images/contactusFull.jpeg";


export const ContactUs = ({ }) => {
    const theme = useTheme();

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item md={12} lg={12} xs={12}>
                    <Typography className="content-head-text" style={{ marginBottom: 0 }}>
                        CONTACT  <span style={{ color: theme.palette.secondary[200] }}> US</span>
                    </Typography>
                </Grid>
                <Grid item md={12} lg={12} xs={12}>
                    <Box className="contact-container">
                        <Box className="div1">
                            <Grid container spacing={2} className="contact-form" >
                                <Grid item md={2} lg={2} xs={2} sx={{ display: { md: "block", xs: "none" } }}>
                                    <img src={logo} />
                                </Grid>
                                <Grid item md={7} lg={7} xs={12}>
                                    <ContactUsForm />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="div2">
                            <img src={contactImage} alt="Image" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}

