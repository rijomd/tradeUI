import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { SideBar } from './SideBar';
import { Header } from './Header';
import { useMobile } from 'components/hooks/Hook';
import { HeaderHeight } from 'themes/constants/ThemeConstants';
import { Container } from '@mui/material';

import "../style.css";

const HomeWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.paper,
    minHeight: '100vh'
}));

export const HomeLayout = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMobile();

    return (
        <HomeWrapper>
            <Header isMobile={isMobile} toggleDrawer={() => setDrawerOpen(!drawerOpen)} />
            <SideBar open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />
            <Container className='home-container' maxWidth={false} sx={{
                paddingTop: `calc(${HeaderHeight + 3}px)`, width: '100%',
                maxWidth: '100%', padding: 0
            }}>
                <Outlet />
            </Container>
        </HomeWrapper>
    )
}

