import styled from 'styled-components';
const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  color: #ffffff;
  padding: 20px;
  border-right: 1px solid #dcdcdc;
`;

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
`;

const SidebarButton = styled.a`
  width: 226px;
  height: 52px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding-left: 20px;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) => (props.selected ? '#e9e9e9' : '#ffffff')};

  svg {
    color: #89131D;
  }

  &:hover {
    background-color: #89131d;
  }

  &:hover p {
    color: #ffffff;
  }

  &:hover svg {
    fill: #ffffff;
  }
`;

const InfButtom = styled.p`
  font-size: 16px;
  text-align: center;
  text-justify: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #202020;

  &:hover {
    color: #ffffff;
  }
`;

const LogoImage = styled.img`
  width: 124px;
`;

export {
    SidebarWrapper,
    MenuButton,
    SidebarButton,
    InfButtom,
    LogoImage,
};