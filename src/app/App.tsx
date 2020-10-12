import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { ThemeProvider } from 'sha-el-design/lib/components/Theme/Theme';

export const App: React.FC<RouteComponentProps> = () => {
  return (
    <ThemeProvider theme="LIGHT">
      <Router></Router>
    </ThemeProvider>
  );
};
