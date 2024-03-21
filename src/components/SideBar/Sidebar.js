import React, { useState } from 'react';
import Logo from '../../assets/img/Frame.png';
import { FaShoppingBag } from 'react-icons/fa';
// import { MdOutlineContacts, MdEmail } from 'react-icons/md';
// import { IoDocumentSharp } from 'react-icons/io5';
import { Helmet } from 'react-helmet';
import { SidebarWrapper, MenuButton, SidebarButton, InfButtom, LogoImage } from './SideBarStyles';

const buttonConfigurations = [
  { id: 'Produtos', icon: <FaShoppingBag size={24} />, label: 'Produtos' },
  // { id: 'Contatos', icon: <MdOutlineContacts size={24} />, label: 'Contatos' },
  // { id: 'Relatórios', icon: <FaClipboardList size={24} />, label: 'Relatórios' },
  // { id: 'Avisos', icon: <MdEmail size={24} />, label: 'Avisos' },
  // { id: 'Documentos', icon: <IoDocumentSharp size={24} />, label: 'Documentos' },
];

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (button) => {
    console.log("Button Clicked:", button);
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
