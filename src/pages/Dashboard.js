import React from 'react';
import Sidebar from '../components/Sidebar';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9e9e9;
  }
`;

const Dashboard = () => {
  return (
    <div>
      <GlobalStyle />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
