import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/Frame.png';
import { FaShoppingBag, FaClipboardList } from 'react-icons/fa';
import { MdOutlineContacts, MdEmail } from "react-icons/md";
import { IoDocumentSharp } from "react-icons/io5";
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
`;

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 80px;
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
    background-color: #89131D;
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
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #202020;

  &:hover {
    color: #ffffff;
  }
`;

const LogoImage = styled.img`
    width: 124px;
`;

const Sidebar = () => {
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
        <SidebarButton href="#" selected={selectedButton === 'Produtos'} onClick={() => handleClick('Produtos')}>
          <FaShoppingBag color="#89131D" size={24} style={{ width: '24px', height: '24px' }} />
          <InfButtom>Produtos</InfButtom>
        </SidebarButton>

        <SidebarButton href="#" selected={selectedButton === 'Contatos'} onClick={() => handleClick('Contatos')}>
          <MdOutlineContacts color="#89131D" size={24} style={{ width: '24px', height: '24px' }} />
          <InfButtom>Contatos</InfButtom>
        </SidebarButton>

        <SidebarButton href="#" selected={selectedButton === 'Relatórios'} onClick={() => handleClick('Relatórios')}>
          <FaClipboardList color="#89131D" size={24} style={{ width: '24px', height: '24px' }} />
          <InfButtom>Relatórios</InfButtom>
        </SidebarButton>

        <SidebarButton href="#" selected={selectedButton === 'Avisos'} onClick={() => handleClick('Avisos')}>
          <MdEmail color="#89131D" size={24} style={{ width: '24px', height: '24px' }} />
          <InfButtom>Avisos</InfButtom>
        </SidebarButton>

        <SidebarButton href="#" selected={selectedButton === 'Documentos'} onClick={() => handleClick('Documentos')}>
          <IoDocumentSharp color="#89131D" size={24} style={{ width: '24px', height: '24px' }} />
          <InfButtom>Documentos</InfButtom>
        </SidebarButton>
      </MenuButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
