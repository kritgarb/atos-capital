import React, { useState } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9e9e9;
    margin: 0;
  }
`;

const DashboardWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleSidebarClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <GlobalStyle />
      <DashboardWrapper>
        <Sidebar onSidebarClick={handleSidebarClick} />
        {selectedButton === 'Produtos' && <ProductList />}
        <ContentWrapper>
          <Navbar />
        </ContentWrapper>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
