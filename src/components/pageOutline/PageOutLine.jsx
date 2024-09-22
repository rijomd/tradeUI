import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { styled, useTheme } from '@mui/material/styles';
import { Typography, Link, useMediaQuery, Backdrop, Grid, Divider } from '@mui/material';
import { PageLoader } from 'components/loader/PageLoader';

const Copyright = () => {
    return (
        <Typography variant="subtitle2" color="grey.500" align="center" component={Link}>
            {`Copyright © www.growwise.com © ${new Date().getFullYear()}`}
        </Typography>
    );
}

export const MemorizedPageOutLine = ({ children, isLoading = false, title, actions = [] }) => {
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

    return (
        <PageWrapper>
            <PerfectScrollbar component="div">
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, background: theme.palette.background.default }}
                    open={isLoading}
                >
                    <PageLoader />
                </Backdrop>

                <Grid container  >
                    {title && <Grid item md={12} xs={12} xl={12} lg={12}>
                        <Grid container spacing={2}
                            sx={{ alignItems: 'center' }}
                        >
                            <Grid item md={4} xs={12}>
                                <Typography variant="h4" align="inherit" sx={{ margin: '4px' }}>{title}</Typography>
                            </Grid>
                            <Grid item md={8} xs={12} sx={{ textAlign: 'end' }}>
                                {/* need to add actions as common */}
                                {actions?.length > 0 && <></>}
                            </Grid>
                        </Grid>
                    </Grid>}
                    <Grid item md={12} xs={12} xl={12} lg={12} >
                        {children}
                    </Grid>
                    <Grid item md={12} xs={12} xl={12} lg={12} sx={{ textAlign: 'center', marginTop: 1.5 }}>
                        <Copyright />
                    </Grid>
                </Grid>
            </PerfectScrollbar>
        </PageWrapper>
    )
}

export const PageOutLine = React.memo(MemorizedPageOutLine);
