import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Box } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const DateRangePicker = forwardRef(({ handleSubmit = () => { } }, ref) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const buttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        onSubmit: () => { buttonRef.current.click(); },
    }));

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DatePicker
                        label="Start Date"
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <DatePicker
                        label="End Date"
                        value={endDate}
                        minDate={startDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <button ref={buttonRef} style={{ display: "none" }} onClick={() => { handleSubmit(startDate, endDate); }} >Ok</button>
            </LocalizationProvider>
        </>
    )
});
