import React, { lazy, useMemo, Suspense } from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

import { PageRouter } from "routes/PageRouter";

import { HomeLayout } from 'components/layout';
import { LazyLoader } from "components/loader/LazyLoader";
import { ErrorNotFound } from 'components/error/ErrorNotFound';
import ErrorAuthorization from "components/error/ErrorAuthorization";

import Themes from "themes/components/Theme";
import { getAuthRouters, getAuthToken } from "service/AuthMethods";

function App() {
  const theme = useSelector((state) => state.theme);

  const HomePage = lazy(() => import("modules/home/views/HomePage"));
  const Layout = lazy(() => import("components/layout/common/Layout.jsx"));

  const privateRoute = (Component, auth) => {
    if (auth) {
      const authToken = getAuthToken();
      const currentPath = window?.location?.pathname;
      if (authToken) {
        const menus = getAuthRouters() || [];
        const verifiedAuthComp = menus.filter(x => x.path === currentPath);
        // need to add 403 condition from page list if components not exist 
        // need to check health check if
        if (verifiedAuthComp?.length > 0) {
          return <Component />;
        }
        else {
          return <ErrorAuthorization />;
        }
      }
      else {
        if (currentPath === '/login') {
          return null;
        }
        return <Navigate to={`/login`} />;
      }
    }
    return <Component />;
  };

  const renderGeneratedRoutes = useMemo(() => {
    let element = [];
    PageRouter.map((item) => {
      const viewName = item.viewName;
      const name = item.name;
      const moduleName = item.moduleName;
      let auth = item.auth;

      if (moduleName && viewName) {
        const generated = lazy(() => import(`modules/${moduleName}/views/${viewName}.jsx`));     /* @vite-ignore */
        const DynamicLayout = lazy(() => import(`components/layout/${item?.layoutName}/Layout.jsx`));     /* @vite-ignore */
        element.push(
          <Route key={name} element={<DynamicLayout />}>
            <Route
              path={`${item.path}`}
              element={privateRoute(generated, auth)}
            />
          </Route>
        );
      }
    });
    return element;
  }, [window?.location?.pathname]);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        draggable
        pauseOnHover
        theme="dark"
        hideProgressBar={true}
        style={{
          margin: '0 auto',
          maxWidth: "90%",
          width: "100%",
          left: 0,
          right: 0,
          boxSizing: 'border-box',
        }}
      />
      <ThemeProvider theme={Themes(theme)}>
        <CssBaseline />
        <Suspense fallback={<LazyLoader />}>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path={`/`} element={<HomePage />} />
            </Route>
            {renderGeneratedRoutes}
            <Route element={<Layout />}>
              <Route path="*" element={<ErrorNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
