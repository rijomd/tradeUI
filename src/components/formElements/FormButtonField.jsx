import React from "react";
import { Button, Tooltip } from "@mui/material";

export const FormButtonField = (props) => {
  const { fullWidth = true, children, onClick = () => { }, disabled, color = 'secondary', label, variant = "contained", size = "small", ...others } = props;

  return (
    <Tooltip title={label}>
      <Button
        variant={'contained'}
        size={size}
        color={color}
        endIcon={disabled && <CircularProgress />}
        fullWidth={fullWidth}
        onClick={onClick}
        disabled={disabled}
        {...others}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
