import React from "react";
import { TextField, InputAdornment } from '@mui/material';

export const FormTextField = (props) => {
  const { label, placeholder, error, onChange, onBlur = () => { }, variant = 'outlined',
    value, required, type, name, endAdornment = null, startAdornment = null, size = "small", ...others } = props;

  return (
    <TextField
      variant={variant}
      size={size}
      color="secondary"
      id={`form-text-name-${name}`}
      autoComplete='off'
      type={type}
      fullWidth={true}
      name={name}
      value={value}
      label={label}
      placeholder={placeholder}
      required={required}
      error={Boolean(error?.isError)}
      helperText={error?.errorMsg || ""}
      onChange={(e) => onChange(e)}
      onBlur={(e) => { onBlur(e) }}
      InputProps={startAdornment || endAdornment && {
        startAdornment: (
          <InputAdornment position="start" sx={{ cursor: "pointer" }}>
            {startAdornment}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" sx={{ cursor: "pointer" }}>
            {endAdornment}
          </InputAdornment>
        ),
      }}
      {...others}
    />
  );
};
