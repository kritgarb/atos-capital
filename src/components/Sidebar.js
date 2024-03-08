import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/Frame.png';
import { FaShoppingBag, FaClipboardList } from 'react-icons/fa';
import { MdOutlineContacts, MdEmail } from 'react-icons/md';
import { IoDocumentSharp } from 'react-icons/io5';
import { Helmet } from 'react-helmet';

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

const buttonConfigurations = [
  { id: 'Produtos', icon: <FaShoppingBag size={24} />, label: 'Produtos' },
  { id: 'Contatos', icon: <MdOutlineContacts size={24} />, label: 'Contatos' },
  { id: 'Relatórios', icon: <FaClipboardList size={24} />, label: 'Relatórios' },
  { id: 'Avisos', icon: <MdEmail size={24} />, label: 'Avisos' },
  { id: 'Documentos', icon: <IoDocumentSharp size={24} />, label: 'Documentos' },
];

const Sidebar = ({ onSidebarClick }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <SidebarWrapper>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" />
      </Helmet>
      <LogoImage src={Logo} alt="" />
      <MenuButton>
        {buttonConfigurations.map((button) => (
          <SidebarButton
            key={button.id}
            href="#"
            selected={selectedButton === button.id}
            onClick={() => handleClick(button.id)}
          >
            {button.icon}
            <InfButtom>{button.label}</InfButtom>
          </SidebarButton>
        ))}
      </MenuButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
