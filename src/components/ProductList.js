import React from 'react';
import styled from 'styled-components';
import { IoIosAdd } from "react-icons/io";
import { Helmet } from 'react-helmet';
import { SearchBox } from '../styles/Navbarstyles';
import { FaSearch } from 'react-icons/fa';

const ProductListContainer = styled.div`
  height: 100%;
  background-color: #f2f2f2;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;

  width: 400px;
  gap: 0;
  margin-bottom: 20px;

  h1 {
    font-size: 36px;
    font-weight: 600;
    font-style: normal;
    color: #202020;
  }
  h2 {
    font-size: 14px;
    font-weight: Regular;
    margin-top: -30px;
    color: #898989;
  }
`;

const ButtonNewProduct = styled.button`
  width: 153.6px;
  height: 48px;

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;

  background-color: #89131D;
  color: white;

  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegistredProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  font-family: 'Poppins', sans-serif;

  h2 {
    font-size: 24px;
    font-weight: 600;
    font-style: normal;

    margin-top: 2px;

    color: #202020;
  }

  h3 {
    width: 190px;
    height: 47px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-size: 12px;
    font-weight: 600;

    border-radius: 8px;

    margin-top: 2px;

    background-color: white;
    color: #666666;

    h2 {
      margin-right: -16px;
      margin-top: 18px;
      color: #202020;
    }
  }
`;

const SearchProducts = styled(SearchBox)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #666666;
  }
`;

const SearchInput = styled.input`
  justify-content: flex-start;
  align-items: center;

  width: 226px;
  height: 38px;

  padding: 0 60px;
  border-radius: 8px;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;

  background-color: white;
  color: #898989;
`;

const SearchIcon = styled.div`
  align-self: center;
  margin-top: -28px;
  margin-left: 310px;
  color: #898989;
  align-self: center;
`;

const ListOfProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1346px;

  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  ul {
    width: 95%;
    height: 100%;

    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50px;

    margin: 10px 0;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: black;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  width: 100px;
  height: 50px;
`;

const Button1 = styled.button`
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;

  background-color: #492DE7;
  color: white;

  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button2 = styled.button`
width: 50px;

display: flex;
align-items: center;
justify-content: center;

font-family: 'Poppins', sans-serif;
font-size: 12px;
font-weight: 600;

background-color: #E72D2D;
color: white;

border: none;
border-radius: 5px;
cursor: pointer;
`;

const DescriptionOfList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 140px;

  width: 90%;
  height: 50px;

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 50px;

    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #666666;
  }
`;

const ProductList = () => {
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