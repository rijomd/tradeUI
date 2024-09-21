import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HomeIcon from '@mui/icons-material/Home';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

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
        icon: AssuredWorkloadIcon,
        path: "/investments"
    },
    {
        name: "payments",
        menuName: "Payments",
        icon: CreditScoreIcon,
        path: "/payments"
    }
];
