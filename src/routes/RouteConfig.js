import { Box } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const CommonRoute = lazy(() => import('./CommonRoute/CommonRoutes'));

const RouteConfig = () => {
  return (
    <Router>
      <Suspense fallback={<Box>Loading...</Box>}>
        <CommonRoute />
      </Suspense>
    </Router>
  );
};

export default RouteConfig;
