export const PageRouter = [
    {
        name: "DashBoard",
        auth: false,
        moduleName: "dashBoard",
        viewName: "DashBoard",
        layoutName: "common",
        path: "/dashBoard"
    },
    {
        name: "Investments",
        auth: false,
        moduleName: "investments",
        viewName: "Investments",
        layoutName: "common",
        path: "/investments"
    },
    {
        name: "Payments",
        auth: false,
        moduleName: "payments",
        viewName: "Payments",
        layoutName: "common",
        path: "/payments"
    },
    {
        name: "Auth",
        auth: false,
        moduleName: "auth",
        viewName: "Login",
        path: "/login",
        layoutName: "auth"
    }
];