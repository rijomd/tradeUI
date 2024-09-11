import useMediaQuery from "@mui/material/useMediaQuery";
import { toast } from "react-toastify";

import "../style/hookStyle.css";

export const useMobile = (xs) => {
  const useMobileSm = useMediaQuery("(max-width:900px)");
  const useMobileXs = useMediaQuery("(max-width:600px)");

  return xs ? useMobileXs : useMobileSm;
};

export const useAlert = (msg, type = 'success') => {

  const classNames = {
    success: 'toast-success',
    error: 'toast-error',
    warning: 'toast-warning',
    info: 'toast-info',
  };

  return toast(msg, {
    className: classNames[type],
    progressClassName: 'progress-bar',
  });
};