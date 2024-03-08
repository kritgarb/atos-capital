import React from 'react';
import Avatar from '../assets/img/Image.png';
import { FaSearch, FaQuestionCircle } from 'react-icons/fa';
import { VscBellDot } from "react-icons/vsc";
import { Helmet } from 'react-helmet';
import { Container,
  NavbarWrapper,
  SearchBox,
  SearchInput,
  SearchIcon,
  RightNav,
  NavbarIcon,
  UserSection,
  UserName,
  UserAvatar,
  MainContent } from '../styles/Navbarstyles';

function App() {
  return (
    <Container>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Helmet>
      <MainContent>
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
}

export default App;
