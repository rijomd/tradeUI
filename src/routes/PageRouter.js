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
        name: "Auth",
        auth: false,
        moduleName: "auth",
        viewName: "Login",
        path: "/login",
        layoutName: "auth"
    }
];