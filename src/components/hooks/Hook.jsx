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
    theme: 'toast-theme'
  };

  return toast(msg, {
    className: classNames[type],
    progressClassName: 'progress-bar',
  });
};


export const getFridays = (numNext, numPrevious) => {
  const today = new Date();

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const label = date.toLocaleDateString('en-US', options); //  August 20, 2024
    const value = date.toLocaleDateString('en-GB').split('/').reverse().join('-'); //  20-08-2024
    return { value, label };
  };

  const getPreviousFridays = (count) => {
    const fridays = [];
    let current = new Date(today);

    while (fridays.length < count) {
      current.setDate(current.getDate() - 1);
      if (current.getDay() === 5) {
        fridays.unshift(formatDate(new Date(current)));
      }
    }

    return fridays;
  };

  const getNextFridays = (count) => {
    const fridays = [];
    let current = new Date(today);

    while (fridays.length < count) {
      current.setDate(current.getDate() + 1);
      if (current.getDay() === 5) {
        fridays.push(formatDate(new Date(current)));
      }
    }

    return fridays;
  };

  return {
    totalFridays: [...getPreviousFridays(numPrevious), ...getNextFridays(numNext)]
  };
};