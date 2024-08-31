import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import aboutUsimage from 'assets/images/aboutUsimage.jpg';

export const Content = () => {
    const theme = useTheme();

    return (
        <Container >
            <Grid container spacing={2} >
                <Grid item lg={5} xl={5} md={5} sm={12} xs={12}>
                    <img className="content-about-image" src={aboutUsimage} />
                </Grid>
                <Grid item lg={7} xl={7} md={7} sm={12} xs={12}>
                    <h1 className="content-head-text">
                        MEET OUR  <span style={{ color: theme.palette.secondary[200] }}>CREATIVE TEAM</span>
                    </h1>
                    <Box className="content-body">
                        <Box className="background-blur"></Box>
                        <Typography variant='body' color={theme.palette.text.primary}>
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography sx={{ display: { xs: 'none', md: 'block' } }} className='content-success-text'>Success</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
