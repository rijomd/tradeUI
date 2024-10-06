import React from 'react';
import IMAGE from 'assets/images/reviewImage.jpg';
import { Box, Tooltip, Typography } from '@mui/material';

import { getAuthUser } from 'service/AuthMethods';

export const ProfileSection = () => {
    const user = getAuthUser();

    return (
        <Box className="profile-section">
            <img src={IMAGE} />
            <Tooltip title={user?.user_name}>
                <Typography variant='subtitle1'>{user?.user_name?.length > 20 ? user?.user_name?.slice(0, 20) + "..." : user?.user_name}</Typography>
            </Tooltip>
        </Box>
    )
}
