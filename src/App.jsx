import React, { lazy, useMemo, Suspense } from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

import { PageRouter } from "routes/PageRouter";
import { getAuthToken } from "service/AuthMethods";

import { Layout, HomeLayout } from 'components/layout';
import { LazyLoader } from "components/loader/LazyLoader";
import { ErrorNotFound } from 'components/error/ErrorNotFound';

import Themes from "themes/components/Theme";

function App() {
  const theme = useSelector((state) => state.theme);
  const HomePage = lazy(() => import("modules/home/views/HomePage"));

  const PrivateRoute = ({ Component, auth }) => {
    if (auth) {
      const data = getAuthToken();
      // need to add 403 condition from page list if components not exist 
      if (data) { return <Component />; }
      else { return <Navigate to={`/`} />; }
    }
    return <Component />;
  };

  const renderGeneratedRoutes = useMemo(() => {
    let element = [];
    PageRouter.map((item) => {
      const viewName = item.elementPath;
      const name = item.name;
      const moduleName = item.moduleName;
      let auth = item.auth;

      if (moduleName && viewName) {
        const generated = lazy(() => import(`modules/${moduleName}/Views/${viewName}.tsx`));     /* @vite-ignore */
        element.push(
          <Route key={name} element={<Layout />}>
            <Route
              path={`${item.path}`}
              element={<PrivateRoute Component={generated} auth={auth} />}
            />
          </Route>
        );
      }

    });
    return element;
  }, [PageRouter]);

  return (
    <BrowserRouter>
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
