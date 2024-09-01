import React, { useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { FormButtonField } from 'components/formElements/FormButtonField';
import { LoginForm } from '../forms/LoginForm';

import image from "assets/images/loginImage.jpeg";
import '../style/style.css';

const Login = ({ }) => {
    const formRef = useRef(null);

    const handleSubmit = (data) => {
        console.log(data);

    }

    return (
        <Grid container spacing={2} className='login-container' sx={{ backgroundImage: `url(${image})`, }}>
            <Grid item md={7} lg={7} xl={7} >
                {/* <img src={image} /> */}
            </Grid>
            <Grid item md={5} lg={5} xl={5} className='login-sub-container'>
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
                        <Typography variant='body1' >Don't have an account ?</Typography>
                        <Typography variant='menuCaption' pl={2}>Sign Up</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login;
