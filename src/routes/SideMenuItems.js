
import HomeIcon from 'assets/icons/Home.svg';
import InvestmentsIcon from 'assets/icons/Investments.svg';
import PaymentsIcon from 'assets/icons/Payments.svg';


export const MenuItems = [
    {
        name: "DashBoard",
        menuName: "Home",
        icon: HomeIcon,
        path: "/dashBoard",
        disabled: false
    },
    {
        name: "Investments",
        menuName: "Investments",
        icon: InvestmentsIcon,
        path: "/investments"
    },
    {
        name: "Payments",
        menuName: "Payments",
        icon: PaymentsIcon,
        path: "/payments"
    }
];
