
import HomeIcon from 'assets/icons/Home.svg';
import InvestmentsIcon from 'assets/icons/Investments.svg';
import PaymentsIcon from 'assets/icons/Payments.svg';


export const MenuItems = [
    {
        name: "dashBoard",
        menuName: "Home",
        icon: HomeIcon,
        path: "/dashBoard",
        disabled: false
    },
    {
        name: "investments",
        menuName: "Investments",
        icon: InvestmentsIcon,
        path: "/investments"
    },
    {
        name: "payments",
        menuName: "Payments",
        icon: PaymentsIcon,
        path: "/payments"
    }
];
