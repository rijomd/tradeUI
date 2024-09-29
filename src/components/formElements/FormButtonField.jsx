import React from "react";
import { Button, CircularProgress, Tooltip } from "@mui/material";

export const FormButtonField = (props) => {
  const { fullWidth = true, children, onClick = () => { }, disabled, isLoading, color = 'secondary', label, variant = "contained", size = "small", ...others } = props;

  return (
    <Tooltip title={label}>
      <Button
        variant={variant}
        size={size}
        color={color}
        endIcon={isLoading && <CircularProgress />}
        fullWidth={fullWidth}
        onClick={onClick}
        disabled={disabled || isLoading}
        {...others}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
