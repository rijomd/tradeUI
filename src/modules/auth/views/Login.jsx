import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';

import { FormButtonField } from 'components/formElements/FormButtonField';
import { LoginForm } from '../forms/LoginForm';
import { loginAction } from '../reducer/AuthAction';

import image from "assets/images/loginImage.jpeg";
import '../style/style.css';

const Login = ({ }) => {
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (data) => {
        console.log(data);
        dispatch(loginAction(data));
    }

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
            </Grid>
        </Grid>
    )
}

export default Login;
