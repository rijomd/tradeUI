import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ModalPage } from 'components/modals/ModalPage';
import { getFridays, useMobile } from 'components/hooks/Hook';
import { FormButtonField } from 'components/formElements/FormButtonField';

const detailsStyle = {
    border: '1px solid #434242',
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "13px",
    alignItems: "center"
};

export const PaymentScheduler = ({ open = false, handleClose = () => { }, paymentData = {}, submitSchedule = () => { } }) => {
    const { totalFridays } = getFridays(5, 3);
    const xs = useMobile(true);
    const theme = useTheme();
    const [boxIndex, setBoxIndex] = useState(null);
    const [box, setBox] = useState(null);

    const style = {
        bgcolor: 'background.paper',
        border: '1px solid #434242',
        padding: "8px",
        display: 'flex',
        flexDirection: "column",
        background: "#212121",
        borderRadius: "13px",
        height: '60px',
        cursor: "pointer",
        '&:hover': {
            backgroundColor: theme.palette.background.default,
        },
    };

    const submit = (index, item) => {
        setBoxIndex(index);
        setBox(item);
    }

    return (
        <>
            <ModalPage maxWidth="md" open={open} handleClose={handleClose}>
                <Grid container spacing={2}>
                    <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
                        <Typography variant='h4'>Payment Scheduler</Typography>
                        <Typography pt={1} variant='subtitle2' sx={{ color: "#FFFFFFBA" }}> You can withdraw your profits on fridays.</Typography>
                    </Grid>

                    <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
                        <Grid container spacing={1}>
                            {totalFridays.map((item, index) => {
                                return <Grid key={index} item md={3} lg={3} xl={3} xs={6} sm={6}>
                                    <Box sx={{ ...style, background: (index === boxIndex) && theme.palette.primary[200] }}
                                        onClick={() => { submit(index, item) }} >
                                        <Typography variant='body'>{xs ? item?.value : item?.label}</Typography>
                                        <Typography variant='body' sx={{ color: "#FFFFFFBA" }}>Friday</Typography>
                                    </Box>
                                </Grid>
                            })}
                        </Grid>
                    </Grid>

                    <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>

                        <Typography variant='h4' pb={1}>Summary</Typography>

                        <Box p={2} sx={detailsStyle}>
                            <Box sx={{ display: 'flex', flexDirection: "column", }}>
                                <Typography pb={1} sx={{ color: "#FFFFFFB2" }} variant='body' >Growwise Id</Typography>
                                <Typography pb={1} sx={{ color: "#FFFFFFB2" }} variant='body' >Name</Typography>
                                <Typography sx={{ color: "#FFFFFFB2" }} variant='body' >Profit Amount</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: "column", }}>
                                <Typography pb={1} variant='body'>{paymentData?.name}</Typography>
                                <Typography pb={1} variant='body'>{paymentData?.growWiseId}</Typography>
                                <Typography variant='body' sx={{ color: "#91A416" }} >{paymentData?.profit}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
                        <FormButtonField
                            sx={{ textTransform: 'none', marginTop: "12px" }}
                            fullWidth
                            onClick={handleClose}
                            variant="outlined"
                        >
                            Cancel
                        </FormButtonField>
                    </Grid>
                    <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
                        <FormButtonField
                            sx={{ textTransform: 'none', marginTop: "12px" }}
                            fullWidth
                            disabled={box === null}
                            onClick={() => { submitSchedule(box); }}
                        >
                            Schedule
                        </FormButtonField>
                    </Grid>
                    <Grid item ></Grid>
                </Grid>
            </ModalPage>
        </>
    )
}
