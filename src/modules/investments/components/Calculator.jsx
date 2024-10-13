import React, { useState } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';

import CalcIcon from 'assets/icons/calculator.svg';

export const Calculator = () => {
    const [showCalculator, setShowCalculator] = useState(false);
    const [value, setValue] = useState('');

    const handleButtonClick = (val) => {
        if (val === 'C') {
            setValue('');
        } else if (val === '=') {
            if (value >= 100000) {
                setValue(`₹${value * 0.02} to ₹${value * 0.04}`);
            }
            else if (30000 <= value >= 50000) {
                setValue(`${value * 0.05} to ${value * 0.06}`);
            }
            else {
                setValue(`Amount is not in our criteria`);
            }
        } else {
            setValue(value + val);
        }
    };

    return (
        <>
            <Tooltip title={showCalculator ? "Close calculator" : "Show calculator"}>
                <button className="fixed-button" onClick={() => setShowCalculator(!showCalculator)}>
                    <img src={CalcIcon} />
                </button >
            </Tooltip>

            <Box className={`calculator ${showCalculator ? 'show' : ''}`}>
                <Typography variant='h5' sx={{ textAlign: "center" }} m={.5}>Profit Calculator</Typography>
                <input type="text" value={value} readOnly />

                <Box >
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button className="button-end-row" onClick={() => handleButtonClick('=')}>Show</button>
                </Box>
                <Box >
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                </Box>
                <Box >
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('C')}>AC</button>
                </Box>
            </Box>

        </>
    )
}
