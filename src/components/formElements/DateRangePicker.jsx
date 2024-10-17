import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Box } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export const DateRangePicker = forwardRef(({ handleSubmit = () => { } }, ref) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const buttonRef = useRef(null);
    const today = dayjs();

    useImperativeHandle(ref, () => ({
        onSubmit: () => { buttonRef.current.click(); },
    }));

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Start Date"
                        value={startDate}
                        maxDate={today}
                        size="small"
                        onChange={(newValue) => setStartDate(newValue)}
                        renderInput={(params) => <TextField {...params} size="small"
                            sx={{
                                '& .MuiInputBase-root': {
                                    padding: '6px 10px', // Reducing padding to shrink the input height
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1.2rem', // Shrinking the icon size
                                },
                                '& .MuiInputLabel-root': {
                                    fontSize: '0.875rem', // Small font for label
                                },
                            }}
                        />}
                    />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <DatePicker
                        size="small"
                        label="End Date"
                        value={endDate}
                        minDate={startDate}
                        maxDate={today}
                        onChange={(newValue) => setEndDate(newValue)}
                        renderInput={(params) => <TextField  {...params} size="small"
                            sx={{
                                '& .MuiInputBase-root': {
                                    padding: '6px 10px'
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1.2rem'
                                },
                                '& .MuiInputLabel-root': {
                                    fontSize: '0.875rem'
                                },
                            }}
                        />}
                    />
                    <button ref={buttonRef} style={{ display: "none" }} onClick={() => { handleSubmit(dayjs(startDate).format("YYYY/MM/DD"), dayjs(endDate).format("YYYY/MM/DD")); }} >Ok</button>
                </LocalizationProvider>
            </Box>
        </>
    )
});
