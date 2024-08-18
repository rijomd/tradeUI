import { Tooltip } from "@mui/material";

export const FormButtonField = (props) => {
  const { fullWidth = true, children, onClick = () => { }, disabled, color, label, variant, ...others } = props;

  return (
    <Tooltip title={label}>
      <button
        size="small"
        onClick={onClick}
        disabled={disabled}
        {...others}
      >
        {children}
      </button>
    </Tooltip>
  );
};
