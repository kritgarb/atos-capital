import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; 
import Avatar from '../assets/img/Image.png';
import { FaSearch, FaQuestionCircle } from 'react-icons/fa';
import { VscBellDot } from "react-icons/vsc";

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
  border-bottom: 1px solid #DCDCDC; 
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

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
`;

const NavbarIcon = styled.div`
  display: flex;
  flex-directiom: wrap;
  wrap: nowrap;
  justify-content: center;

  cursor: pointer;

  &:hover {
    color: #89131D;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
`;

const UserName = styled.p`
  margin-right: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 0 7px #89131D;
  }
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
          <RightNav>
            <NavbarIcon>
              <FaQuestionCircle size={20} />
            </NavbarIcon>
            <NavbarIcon>
              <VscBellDot size={25} />
            </NavbarIcon>

            <UserSection>
            <UserAvatar src={Avatar} alt="User Avatar" />
              <UserName>Cristina</UserName>
            </UserSection>
          </RightNav>
        </NavbarWrapper>
      </MainContent>
    </Container>
  );
};

export default App;
