import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { FormTextField } from 'components/formElements/FormTextField';

export const LoginForm = forwardRef(({ handleSubmit = () => { } }, ref) => {
    const [formData, setFormData] = useState({ password: "", user_name: "" });
    const [typeText, setTypeText] = useState(false);
    const buttonRef = useRef(null);

    const onChange = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    useImperativeHandle(ref, () => ({
        onSubmit: () => { buttonRef.current.click(); },
    }));

    return (
        <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
                <FormTextField
                    onChange={onChange}
                    name="user_name"
                    label="User Name"
                    placeholder="User name"
                    type="text"
                    value={formData['user_name']}
                    size="large"
                    variant="standard"
                />
            </Grid>
            <Grid item md={12} xs={12}>
                <FormTextField
                    onChange={onChange}
                    name="password"
                    label="Password"
                    placeholder="Password"
                    type={typeText ? "text" : "password"}
                    value={formData['password']}
                    size="large"
                    variant="standard"
                    endAdornment={formData['password'] !== "" ? <RemoveRedEyeOutlinedIcon onClick={() => {
                        setTypeText(!typeText);
                    }} /> : null}
                />
            </Grid>
            <button ref={buttonRef} style={{ display: "none" }} onClick={() => { handleSubmit(formData) }}>Ok</button>
        </Grid>
    )
});

