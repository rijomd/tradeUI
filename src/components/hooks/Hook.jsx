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

export const getFridays = (count) => {
  const today = new Date();
  const fridays = [];
  let current = new Date(today);

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 5 = Friday)
  const todayDay = current.getDay();

  // Move to the next Friday if today is before Friday
  if (todayDay <= 5) {
    current.setDate(current.getDate() + (5 - todayDay)); // This week’s Friday
    current.setDate(current.getDate() + 7); // Next week’s Friday
  }

  while (fridays.length < count) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const label = current.toLocaleDateString('en-US', options);
    const value = current.toLocaleDateString('en-GB').split('/').reverse().join('-');

    fridays.push({
      value,
      label
    });

    current.setDate(current.getDate() + 7);
  }

  return fridays;
};

const colors = [
  { label: "PENDING", value: "#FE9705" },
  { label: "REJECTED", value: "#D11313" },
  { label: "APPROVED", value: "green" },
];

export const getStatusColors = (status) => {
  return status ? colors.find(x => x.label === status?.toUpperCase())?.value : "#ccc";
}