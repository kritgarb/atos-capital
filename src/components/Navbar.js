import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; 
import { FaSearch, FaQuestionCircle, FaBell } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86.4px;
  padding: 0 20px;
  background-color: #fff; 
  border-bottom: 1px solid #ccc; 
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 38.4px;
  padding: 0 60px;
  border-radius: 8px;
  border: none;

  background-color: #f5f5f5;
  color: #898989;
`;

const SearchIcon = styled.div`
    color: #898989;
    margin-left: -470px;
`;

const NavbarIcon = styled.div`
  display: flex;
  flex-directiom: wrap;
  wrap: nowrap;
  margin-right: 250px;
  cursor: pointer;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  margin-right: 10px;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const MainContent = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <Container>
      <MainContent>
        <Sidebar />
        <NavbarWrapper>
        <SearchBox>
            <SearchInput type="text" placeholder="Procurar..." />
            <SearchIcon>
              <FaSearch size={18} />
            </SearchIcon>
          </SearchBox>
          <div>
            <NavbarIcon>
              <FaQuestionCircle size={20} />
            </NavbarIcon>
            <NavbarIcon>
              <FaBell size={20} />
            </NavbarIcon>

            <UserSection>
              <UserName>John Doe</UserName>
              <UserAvatar src="url_to_user_avatar.jpg" alt="User Avatar" />
            </UserSection>
          </div>
        </NavbarWrapper>
      </MainContent>
    </Container>
  );
};

export default App;
