import React from 'react';
import { Avatar, Box, ButtonBase } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useTheme } from '@mui/material/styles';

import { LogoSection } from '../logoSection';
import { ProfileSection } from './ProfileSection';
import { Notification } from './Notification';
import { useMobile } from 'components/hooks/Hook';

export const Header = ({ handleLeftDrawerToggle = () => { } }) => {
    const theme = useTheme();
    const md = useMobile();

    return (
        <>
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: { width: 'auto' },
                }}
            >
                <Box className='log-section' component="span" sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            display: md ? "flex" : "none"
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <WidgetsIcon />
                    </Avatar>
                </ButtonBase>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", width: "85%" }}>
                <Notification />
                <ProfileSection />
            </Box>
        </>
    )
}
