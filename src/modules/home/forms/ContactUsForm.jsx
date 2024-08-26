import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { FormTextField } from 'components/formElements/FormTextField';
import { FormButtonField } from 'components/formElements/FormButtonField';

export const ContactUsForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const onChange = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = () => {

    }

    return (
        <Grid container spacing={2}>
            <Grid item md={12} lg={12} xs={12}>
                <FormTextField
                    onChange={onChange}
                    name="name"
                    label="Full Name"
                    placeholder="Full name"
                    type="text"
                    value={formData['name']}
                    size="large"
                />
            </Grid>
            <Grid item md={12} lg={12} xs={12}>
                <FormTextField
                    onChange={onChange}
                    name="email"
                    label="Email"
                    placeholder="Email"
                    type="text"
                    value={formData['email']}
                    size="large"
                />
            </Grid>
            <Grid item md={12} lg={12} xs={12}>
                <FormTextField
                    onChange={onChange}
                    name="message"
                    label="Message"
                    placeholder="Message"
                    type="text"
                    multiline
                    rows={5}
                    value={formData['message']}
                    size="large"
                />
            </Grid>
            <Grid item md={12} lg={12} xs={12}>
                <FormButtonField onClick={handleSubmit} size="large"
                    label="Submit" sx={{ fontWeight: 600, textTransform: "capitalize" }}>
                    Submit
                </FormButtonField>
            </Grid>
        </Grid>
    )
}
