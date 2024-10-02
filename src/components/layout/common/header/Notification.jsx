import React, { useState } from 'react';
import { Badge, Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';

import notificationIcon from 'assets/icons/notification.svg';
import IMAGE from 'assets/images/reviewImage.jpg';
import { getStatusColors } from 'components/hooks/Hook';

export const Notification = ({ }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();

    const [notifications, setNotifications] = useState([
        {
            message: "Your Request has been approved",
            status: "Approved",
            date: "02/10/2024",
            name: "Rijo Md"
        },
        {
            message: "Your Request has been approved",
            status: "Pending",
            date: "02/10/2024",
            name: "Nived "
        },
        {
            message: "Your Request has been approved",
            status: "Approved",
            date: "02/10/2024",
            name: "Midhun"
        },
        {
            message: "Your Request has been approved",
            status: "Rejected",
            date: "02/10/2024",
            name: "Dheeraj "
        },
        {
            message: "Your Request has been approved",
            status: "Pending",
            date: "02/10/2024"
        },
        {
            message: "Your Request has been approved",
            status: "Approved",
            date: "02/10/2024"
        },
    ]);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Stack sx={{ alignItems: "center" }} mr={2} spacing={2} direction="row">

                <IconButton onClick={handleClick}>
                    <Badge badgeContent={4} color="secondary">
                        <img style={{ width: "100%" }} src={notificationIcon} />
                    </Badge>
                </IconButton>


                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'notification-button',
                    }}
                >
                    <PerfectScrollbar
                        component="div"
                        style={{
                            height: "400px",
                        }}
                    >
                        <MenuItem sx={{ background: theme.palette.background.paperSecondary }}>
                            <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
                                <Typography variant='h5' >New Notifications</Typography>
                            </Box>
                        </MenuItem>
                        {notifications.length > 0 ? (
                            notifications.map((notification, index) => {
                                const bg = getStatusColors(notification.status);

                                return <MenuItem key={index} onClick={handleClose}>
                                    <ListItemIcon sx={{ paddingRight: "8px" }}>
                                        <img style={{ width: "32px", height: "32px", objectFit: "cover", borderRadius: "50%" }} src={IMAGE} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ paddingRight: "8px" }}>
                                        <Typography variant='body1' >{notification?.name || "Growwise"}</Typography>
                                        <Typography variant='h6' sx={{ color: "#FFFFFFB2" }} >{notification?.message}</Typography>
                                        <Typography variant='h6' sx={{ color: "#C9C8E1" }}>{notification?.date}</Typography>
                                    </ListItemText>
                                    <ListItemText sx={{ paddingRight: "8px" }}>
                                        <Box sx={{ background: bg, padding: "2px 8px", borderRadius: "4px", color: "#fff", fontSize: "12px" }}>
                                            {notification?.status}
                                        </Box>
                                    </ListItemText>
                                </MenuItem>
                            })
                        ) : (
                            <MenuItem onClick={handleClose}>No new notifications</MenuItem>
                        )}
                    </PerfectScrollbar>
                </Menu>
            </Stack>
        </>
    )
}
