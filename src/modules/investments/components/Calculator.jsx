import React, { useState } from 'react';
import { Box, Tooltip } from '@mui/material';

import CalcIcon from 'assets/icons/calculator.svg';

export const Calculator = () => {
    const [showCalculator, setShowCalculator] = useState(false);
    const [value, setValue] = useState('');

    const handleButtonClick = (val) => {
        if (val === 'C') {
            setValue('');
        } else if (val === '=') {
            try {
                setValue(eval(value));
            } catch {
                setValue('Error');
            }
        } else {
            setValue(value + val);
        }
    };

    return (
        <>
            <Tooltip title={"Show calculator"}>
                <button className="fixed-button" onClick={() => setShowCalculator(!showCalculator)}>
                    <img src={CalcIcon} />
                </button >
            </Tooltip>

            <Box className={`calculator ${showCalculator ? 'show' : ''}`}>
                <input type="text" value={value} readOnly />

                <Box className="button-row">
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('+')}>+</button>
                </Box>
                <Box className="button-row">
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>
                </Box>
                <Box className="button-row">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>
                </Box>
                <Box className="button-row">
                    <button onClick={() => handleButtonClick('C')}>AC</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('=')}>=</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                </Box>
            </Box>

        </>
    )
}
