import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import * as Yup from "yup";
import { Formik } from "formik";

import { FormTextField } from 'components/formElements/FormTextField';

export const LoginForm = forwardRef(({ handleSubmit = () => { } }, ref) => {
    const [formData, setFormData] = useState({ password: "", username: "" });
    const [typeText, setTypeText] = useState(false);
    const buttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        onSubmit: () => { buttonRef.current.click(); },
    }));

    return (
        <Formik
            initialValues={formData}
            validationSchema={Yup.object().shape({
                username: Yup.string()
                    .max(255)
                    .required("username is required"),
                password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={handleSubmit}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
            }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item md={12} xs={12}>
                            <FormTextField
                                onChange={handleChange}
                                name="username"
                                label="User Name"
                                placeholder="User name"
                                type="text"
                                value={values.username}
                                size="large"
                                variant="standard"
                                onBlur={handleBlur}
                                error={{
                                    isError: Boolean(touched.username && errors.username),
                                    errorMsg: errors.username,
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <FormTextField
                                onChange={handleChange}
                                name="password"
                                label="Password"
                                placeholder="Password"
                                type={typeText ? "text" : "password"}
                                value={values.password}
                                size="large"
                                variant="standard"
                                onBlur={handleBlur}
                                endAdornment={values['password'] !== "" ? <RemoveRedEyeOutlinedIcon onClick={() => {
                                    setTypeText(!typeText);
                                }} /> : null}
                                error={{
                                    isError: Boolean(touched.password && errors.password),
                                    errorMsg: errors.password,
                                }}
                            />
                        </Grid>
                        <button type="submit" ref={buttonRef} style={{ display: "none" }} >Ok</button>
                    </Grid>
                </form>
            )}
        </Formik>
    )
});

