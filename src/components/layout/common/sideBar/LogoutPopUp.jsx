import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import image from "assets/images/logout.png"
import { ModalPage } from 'components/modals/ModalPage';
import { FormButtonField } from 'components/formElements/FormButtonField';

export const LogoutPopUp = ({ isOpen, handleClose, handleSubmit }) => {
    return (
        <ModalPage maxWidth="xs" open={isOpen} handleClose={handleClose}>
            <Grid container spacing={1}>
                <Grid item md={12} lg={12} xs={12}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img src={image} style={{ objectFit: "contain", width: "84px", height: "84px" }} />
                    </Box>

                    <Typography sx={{ textAlign: "center" }} variant='h5'>Are you sure, Do you want to exit?</Typography>
                </Grid>
                <Grid item md={12} lg={12} xs={12}>
                    <Box mt={2} mb={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                        <FormButtonField onClick={handleClose} sx={{ background: "#272A32", marginRight: "8px", textTransform: "capitalize" }}>Cancel</FormButtonField>
                        <FormButtonField onClick={handleSubmit} sx={{ textTransform: "capitalize" }}>Confirm</FormButtonField>
                    </Box>
                </Grid>
            </Grid>
        </ModalPage>
    )
}
