import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import NewProduct from '../components/NewProduct';
import { GlobalStyle, DashboardWrapper, ContentWrapper } from '../styles/DashboardStyles';

const Dashboard = () => {
  const [isNewProductOpen, setIsNewProductOpen] = useState(false);

  const handleOpenNewProduct = () => {
    setIsNewProductOpen(true);
  };

  const handleCloseNewProduct = () => {
    setIsNewProductOpen(false);
  };

  const handleSidebarClick = (button) => {
    console.log('Selected Button:', button);
    if (button === 'new-product') {
      handleOpenNewProduct();
    }
  };

  return (
    <div>
      <GlobalStyle />
      <DashboardWrapper>
        <Sidebar onSidebarClick={handleSidebarClick} />
        <ContentWrapper>
          <Navbar />
          {isNewProductOpen ? (
            <NewProduct handleClose={handleCloseNewProduct} />
          ) : (
            <ProductList handleSidebarClick={handleSidebarClick} />
          )}
        </ContentWrapper>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
