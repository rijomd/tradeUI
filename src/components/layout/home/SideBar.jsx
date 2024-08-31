import React from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { LogoSection } from '../LogoSection';
import { DrawerWidth, HeaderHeight } from 'themes/constants/ThemeConstants';

export const SideBar = ({ toggleDrawer = () => { }, open = false }) => {
    const theme = useTheme();

    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer}
            PaperProps={{
                sx: {
                    boxShadow: `inset 4px 2px 22px 20px ${theme.palette.grey[50]}`,
                },
            }}
        >
            <Box
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
                sx={{ width: DrawerWidth }}
            >
                <ListItem sx={{ minHeight: HeaderHeight }}>
                </ListItem>
                <Divider sx={{ paddingTop: "8px" }} />
                <List>
                    <ListItem >
                        <ListItemText primary="About Us" />
                    </ListItem>
                    <ListItem >
                        <ListItemText primary="Contact Us" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}
