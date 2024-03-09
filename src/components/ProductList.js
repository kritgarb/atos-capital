import React from 'react';
import { IoIosAdd } from "react-icons/io";
import { Helmet } from 'react-helmet';
import { FaSearch } from 'react-icons/fa';
import {  ProductListContainer,
          HeaderContainer,
          TextContainer,
          ButtonNewProduct,
          RegistredProducts,
          SearchProducts,
          SearchInput,
          SearchIcon,
          ListOfProducts,
          DescriptionOfList,
          ActionButtons,
          Button1,
          Button2,  } from '../styles/ProductListStyles';

const ProductList = () => {
  console.log('ProductList rendered');

  const products = [
    {
      id: 1,
      name: 'Produto 1',
      categories: 'Categoria 1',
      date: 'Fev, 21',
      cod: '0001',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Produto 2',
      categories: 'Categoria 2',
      date: 'Fev, 21',
      cod: '0002',
      price: 29.99,
    },
  ];

  return (
    <ProductListContainer>
      <Helmet>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <HeaderContainer>
        <TextContainer>
          <h1>Olá Usuário!</h1>
          <h2>Seja bem-vindo!</h2>
        </TextContainer>

        <ButtonNewProduct href="">
          <IoIosAdd />
          Novo Produto
        </ButtonNewProduct>
      </HeaderContainer>
      <hr
        style={{
          opacity: 0.2,
          backgroundColor: '#666666',
          height: '0.5px',
          border: 'none',
        }}
      />
      <RegistredProducts>
        <h2>Seus Cadastros</h2>
        <h3>
          <h2>31</h2>Total de Cadastros
        </h3>
      </RegistredProducts>
      <SearchProducts>
        <div>
          <SearchInput
            type="text"
            placeholder="Procurar..."
          />
          <SearchIcon>
            <FaSearch size={18} />
          </SearchIcon>
        </div>
        <p>
          Última atualização: 26 Feb 2024 10:45 AM
        </p>
      </SearchProducts>
      <br />

      <ListOfProducts>
        <DescriptionOfList>
          <span>Descrição</span>
          <span>Categoria</span>
          <span>Data Cadastro</span>
          <span>Cód.Produto</span>
          <span>Preço</span>
          <span>Ações</span>
        </DescriptionOfList>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong>
              <span>{product.categories}</span>
              <span>{product.date}</span>
              <span>{product.cod}</span>
              <span>{`R$ ${product.price.toFixed(2)}`}</span>
              <ActionButtons>
                <Button1>Editar</Button1>
                <Button2>Excluir</Button2>
              </ActionButtons>
            </li>
          ))}
        </ul>
      </ListOfProducts>
    </ProductListContainer>
  );
};

export default ProductList;