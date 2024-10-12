export const PageRouter = [
    {
        name: "DashBoard",
        auth: true,
        moduleName: "dashBoard",
        viewName: "DashBoard",
        layoutName: "common",
        path: "/dashBoard"
    },
    {
        name: "Investments",
        auth: true,
        moduleName: "investments",
        viewName: "Investments",
        layoutName: "common",
        path: "/investments"
    },
    {
        name: "Payments",
        auth: true,
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
