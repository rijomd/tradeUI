import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import logo from "assets/images/aboutLogo.png";
import contactImage from "assets/images/contactusFull.jpeg";
import { contactUSAction } from '../reducer/HomeAction';
import { ContactUsForm } from '../forms/ContactUsForm';
import { ReCall } from 'components/modals/ReCall';

export const ContactUs = ({ }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const home = useSelector((state) => state.home);
    const init = { CustomerName: "", email: "", message: "" };
    const [formData, setFormData] = useState(init);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (home?.status === "success") {
            setFormData({ ...init });
            setIsOpen(true);
        }
    }, [home?.status]);

    useEffect(() => {
        const timeoutId = isOpen === true && setTimeout(() => {
            setIsOpen(false);
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [isOpen])

    const handleSubmit = async (data) => {
        dispatch(contactUSAction(data));
    }

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
                                    <ContactUsForm handleSubmit={handleSubmit} init={formData} isLoading={home.status} />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="div2">
                            <img src={contactImage} alt="Image" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <ReCall isOpen={isOpen} handleClose={() => { }} />

        </Container>
    )
}

