import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const CommonRoute = lazy(() => import('./CommonRoute/CommonRoutes'));

const RouteConfig = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <CommonRoute />
      </Suspense>
    </Router>
  );
};

export default RouteConfig;
