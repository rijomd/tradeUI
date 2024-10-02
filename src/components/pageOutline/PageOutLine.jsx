import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { styled, useTheme } from '@mui/material/styles';
import { Typography, Link, useMediaQuery, Backdrop, Grid, Box } from '@mui/material';
import { PageLoader } from 'components/loader/PageLoader';


export const MemorizedPageOutLine = ({ children, isLoading = false, title, actions = [], actionComponent = null }) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const PageWrapper = styled('div')(({ theme }) => ({
        height: !matchUpMd ? 'calc(100vh - 100px)' : 'calc(100vh - 75px)',
        position: 'relative',
        overflow: 'hidden',
        padding: '8px',
        backgroundColor: theme.palette.background.paperSecondary,
        border: `1px solid ${theme.palette.primary.main}`
    }));

    const Copyright = () => {
        return <Box  >
            <Typography variant="subtitle2" color="grey.500" align="center" component={Link}>
                {`Copyright © www.growwise.com © ${new Date().getFullYear()}`}
            </Typography>
        </Box>
    }

    return (
        <PageWrapper>
            <PerfectScrollbar component="div">
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, background: theme.palette.background.default }}
                    open={isLoading}
                >
                    <PageLoader />
                </Backdrop>

                <Grid container spacing={2} >
                    {title && <Grid item md={12} xs={12} xl={12} lg={12} sx={{ alignItems: 'center', boxShadow: "0px 10px 20px 0px #00000040" }}>
                        <Grid container spacing={1}
                            sx={{ alignItems: 'center' }}
                        >
                            <Grid item md={4} xs={12}>
                                <Typography variant="h4" align="inherit" sx={{ margin: '4px' }}>{title}</Typography>
                            </Grid>
                            <Grid item md={8} xs={12} sx={{ textAlign: 'end' }}>
                                {actionComponent && <>{actionComponent}</>}
                                {/* need to add actions as common */}
                                {actions?.length > 0 && <></>}
                            </Grid>
                        </Grid>
                    </Grid>}
                    <Grid item md={12} xs={12} xl={12} lg={12} >
                        {children}
                    </Grid>
                    <Grid item md={12} xs={12} xl={12} lg={12} sx={{ background: "##151515", textAlign: "center" }} pt={3} pb={3} mt={2} >
                        <Copyright />
                    </Grid>
                </Grid>
            </PerfectScrollbar>
        </PageWrapper>
    )
}

export const PageOutLine = React.memo(MemorizedPageOutLine);
