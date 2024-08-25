import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import facebookColor from 'assets/icons/facebookColor.svg';
import youtubeColor from 'assets/icons/youtubeColor.svg';
import instagramColor from 'assets/icons/instagramColor.svg';
import linkedInColor from 'assets/icons/linkedInColor.svg';

import facebook from 'assets/icons/facebookWhite.svg';
import instagram from 'assets/icons/instagramWhite.svg';
import linkedIn from 'assets/icons/linkedInWhite.svg';
import youtube from 'assets/icons/youtubeWhite.svg';

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


export const Footer = () => {
    const theme = useTheme();
    const [icon, setIcon] = useState({
        facebook: iconMap['facebook'],
        instagram: iconMap['instagram'],
        linkedIn: iconMap['linkedIn'],
        youtube: iconMap['youtube'],
    });

    const handleMouseEnter = (item) => {
        setIcon((prevState) => ({
            ...prevState,
            [item]: iconMap[item + 'Color'],
        }));
    };

    const handleMouseLeave = (item) => {
        setIcon((prevState) => ({
            ...prevState,
            [item]: iconMap[item],
        }));
    };

    const icons = useMemo(() => {
        return <Box sx={{ display: "flex", justifyContent: "center" }}>
            {['facebook', 'instagram', 'linkedIn', 'youtube'].map((item, index) => {
                return <Box key={index} className={`footer-icon-container`} >
                    <img src={icon[item]} alt={item}
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={() => handleMouseLeave(item)}
                    />
                </Box>
            })}
        </Box>
    }, [icon])

    return (
        <Container>
            <Box p={2} className='footer-container'>
                <Grid container spacing={2} >
                    <Grid item md={12} xs={12}>
                        <h1 class="content-head-text" style={{ textAlign: "center" }}>
                            STAY CONNECT  <span style={{ color: theme.palette.secondary[200] }}>WITH US</span>
                        </h1>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        {icons}
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Divider className='footer-divider' mb={4} sx={{ display: { sm: 'none', xs: "none", md: "block" }, marginBottom: '24px', marginTop: '24px', }} />
                    </Grid>
                    <Grid item md={12} xs={12} pb={2}>
                        <Grid container spacing={3} pb={2} sx={{ margin: { md: '0px' } }}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Typography variant='h3' pb={2}>GROWWISE</Typography>
                                <Typography variant='body1'>
                                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </Grid>
                            <Grid item lg={3} md={3} sm={12} xs={12}>
                                <Typography variant='h3' pb={2}>Pages</Typography>
                                <Typography variant='body1' pb={1}>Home</Typography>
                                <Typography variant='body1' pb={1}>About Us</Typography>
                                <Typography variant='body1' pb={1}>Contact Us</Typography>
                            </Grid>
                            <Grid item lg={3} md={3} sm={12} xs={12}>
                                <Typography variant='h3' pb={2}>Location</Typography>
                                <Typography variant='body1' pb={1}>INDIA</Typography>
                                <Typography variant='body1' >Simply type dummy type</Typography>
                                <Typography variant='body1' >printing dummy printing type</Typography>
                                <Typography variant='body1' >+91 7896574563</Typography>
                                <Typography variant='body1' >growwise@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Divider className='footer-divider' sx={{ display: { sm: 'none', xs: "none", md: "block" }, marginTop: '24px', marginBottom: "24px" }} />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography variant='body1' sx={{ textAlign: "center" }}>
                                <span style={{ color: theme.palette.secondary[200] }}>growise@2024.com</span> | Terms and condition
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

