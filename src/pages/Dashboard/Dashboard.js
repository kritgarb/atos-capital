import React, { useState } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import Sidebar from '../../components/SideBar/Sidebar';
import ProductList from '../../components/ProductList/ProductList';
import NewProduct from '../../components/NewProduct/NewProduct';
import { GlobalStyle, DashboardWrapper, ContentWrapper } from './DashboardStyles';


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
