import { getMyAPiUrl } from "service/AuthMethods";

export const getPaymentsUrl = getMyAPiUrl() + "/payment/getpayment/";
export const addPaymentsUrl = getMyAPiUrl() + "/payment/schedulePayment";

export const errorMessage = "Something Wrong!";
export const successMessage = "Login successfully!";

export const monthsArray = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
];


const currentYear = new Date().getFullYear();
export const yearsArray = Array.from({ length: 6 }, (_, index) => ({
    label: (currentYear + index).toString(),
    value: (currentYear + index).toString(),
}));