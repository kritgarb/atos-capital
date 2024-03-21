import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarWrapper = styled.div`
  width: 100%;
  height: 86.4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #dcdcdc;
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

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;

  background-color: #f5f5f5;
  color: #898989;
`;

const SearchIcon = styled.div`
  color: #898989;
  margin-left: -460px; 
  align-self: center; 
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
`;

const NavbarIcon = styled.div`
  display: flex;
  flex-direction: wrap;
  wrap: nowrap;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #89131d;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  
  :Link {
    text-decoration: none;
  }
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
    box-shadow: 0 0 7px #89131d;
  }
`;

const MainContent = styled.div`
  display: flex;
`;

export {
  Container,
  NavbarWrapper,
  SearchBox,
  SearchInput,
  SearchIcon,
  RightNav,
  NavbarIcon,
  UserSection,
  UserName,
  UserAvatar,
  MainContent,
};
