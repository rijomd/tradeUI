import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

import { FormButtonField } from 'components/formElements/FormButtonField';
import { ReCall } from 'components/modals/ReCall';

import { LoginForm } from '../forms/LoginForm';
import { loginAction } from '../reducer/AuthAction';

import image from "assets/images/loginImage.jpeg";
import '../style/style.css';

const Login = ({ }) => {
    const auth = useSelector((state) => state.auth);
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (data) => {
        try {
            dispatch(loginAction(data));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (auth?.status === "success") {
            setIsOpen(true);
        }
    }, [auth?.status]);

    useEffect(() => {
        const timeoutId = isOpen === true && setTimeout(() => {
            setIsOpen(false);
            navigate('/dashBoard');
            window.location?.reload();
        }, 4000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [isOpen])

    return (
        <Grid container spacing={2} className='login-container' sx={{ backgroundImage: `url(${image})`, }}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} >
                {/* <img src={image} /> */}
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className='login-sub-container'>
                <Box p={2}>
                    <Typography variant='h1' >Welcome...</Typography>
                    <Typography variant='h2' >Please enter the login details</Typography>
                    <Box pt={2} pb={2}>
                        <LoginForm ref={formRef} handleSubmit={handleSubmit} />
                    </Box>
                    <Box sx={{ textAlign: "end", cursor: "pointer" }} pb={2}>
                        <Typography variant='subMenuCaption' >Forgot Password?.</Typography>
                    </Box>
                    <FormButtonField
                        label="Login"
                        size="large"
                        onClick={() => { formRef.current.onSubmit() }}
                        disabled={false}
                        fullWidth
                        sx={{ fontWeight: 600, textTransform: "capitalize" }}
                    >
                        Login
                    </FormButtonField>
                    <Box sx={{ cursor: "pointer", display: "flex" }} pb={2} pt={2}>
                        <Typography variant='menuCaption' >New to growwise</Typography>
                    </Box>
                </Box>

                <ReCall isOpen={isOpen} handleClose={() => { }} />

            </Grid>
        </Grid>
    )
}

export default Login;
