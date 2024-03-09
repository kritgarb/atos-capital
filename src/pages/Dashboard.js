import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import { GlobalStyle, DashboardWrapper, ContentWrapper } from '../styles/DashboardStyles';

const Dashboard = () => {
  const [ setSelectedButton] = useState(null);


  const handleSidebarClick = (button) => {
    console.log('Selected Button:', button);
    setSelectedButton(button);
  };

  return (
    <div>
      <GlobalStyle />
      <DashboardWrapper>
        <Sidebar onSidebarClick={handleSidebarClick} />
        <ContentWrapper>
          <Navbar />         
            <ProductList />
        </ContentWrapper>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
