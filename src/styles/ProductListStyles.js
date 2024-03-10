import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { SearchBox } from '../styles/Navbarstyles';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

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

  
`;

const ListItem = styled.li`

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

  

`;

const Item = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-left: 20px;
  padding: 0 20px;

  width: 100%;
  height: 50px;

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: black;

  span {
    flex: 1; 
    text-align: center; 
    padding: 0 10px; 
    border-right: 1px solid #ccc; 

  &:last-child {
    border-right: none; 
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


export {
  GlobalStyle,
  ProductListContainer,
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
  Button2,
  ListItem,
  Item,
};
