import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContentBox = styled('div')(({ theme, background, flex }) => ({
    padding: "12px",
    background: background,
    border: `1px solid ${theme.palette.secondary[200]}`,
    borderRadius: "8px",
    height: '100%',
    flex: flex,
}));

export const AboutUs = () => {
    const theme = useTheme();

    return (
        <Box className='about-us-home'>
            <Container pb={2} className='container' >
                {/* content must be change */}
                <Grid container spacing={2} pb={3}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant='h1' pb={1} className='header' color={theme.palette.grey[50]}> to know more...</Typography>
                        <Box pb={2} sx={{ display: "flex" }}>
                            <Typography mr={1} variant='h2'> ABOUT </Typography>
                            <Typography variant='h2' color={theme.palette.secondary[200]}> GROWWISE</Typography>
                        </Box>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <ContentBox background={theme.palette.background.paper}>
                            <Typography variant='body'>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                                It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                                It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </ContentBox>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <ContentBox sx={{ marginBottom: 2 }} flex={3} background={theme.palette.secondary.dark}>
                                {[1, 2].map((item) => <List key={item}>
                                    <ListItem >
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Home" />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon>
                                            <InfoIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="About" />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon>
                                            <ContactMailIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Contact" />
                                    </ListItem>
                                </List>)}
                            </ContentBox>
                            <ContentBox flex={1} background={theme.palette.secondary.light}>
                                <Typography color={theme.palette.text.secondary} variant='body'> PageMaker including versions of Lorem Ipsum.</Typography>
                                <Typography color={theme.palette.text.secondary} variant='body'> PageMaker including versions of Lorem Ipsum.</Typography>
                            </ContentBox>
                        </Box>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <ContentBox background={theme.palette.secondary.light}>
                            <Typography variant='body' color={theme.palette.background.default}>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                                It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                                It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </ContentBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )


}
