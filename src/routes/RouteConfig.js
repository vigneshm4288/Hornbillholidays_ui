import { Box } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { footerLogo } from '../assest';

const CommonRoute = lazy(() => import('./CommonRoute/CommonRoutes'));

const RouteConfig = () => {
  return (
    <Router>
      <Suspense fallback={<Box sx={{textAlign:'center',background:'#FDD835',height:'100vh'}}><img  src={footerLogo} alt="logo" style={{width:'100%',maxWidth:'500px'}} /></Box>}>
        <CommonRoute />
      </Suspense>
    </Router>
  );
};

export default RouteConfig;
