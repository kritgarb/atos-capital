import React, { useState, useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Helmet } from 'react-helmet';
import { FaSearch } from 'react-icons/fa';
import apiService from '../../services/apiService';
import EditModal from '../Modal/Modal';
import {
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
} from './ProductListStyles';

const ProductList = ({ handleSidebarClick }) => {
  const [products, setProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [userName, setUserName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await apiService.fetchUserData();
        if (userData && userData.users && userData.users.length > 0) {
          setUserName(userData.users[0].name);
        }
      } catch (error) {
        console.error('Erro ao buscar nome do usuário:', error);
      }
    };

    fetchUserData();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await apiService.fetchProducts();
        setProducts(productList);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingProduct(null);
    setIsEditModalOpen(false);
  };

  const handleDelete = async (productId) => {
    try {
      await apiService.deleteProduct(productId);
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const handleUpdateProduct = async (productId) => {
    try {
      await apiService.editProduct(productId, editingProduct);
      const updatedProducts = products.map((product) => (product.id === productId ? editingProduct : product));
      setProducts(updatedProducts);
      handleCloseModal();
    } catch (error) {
      console.error('Erro ao editar produto:', error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.dsProduto.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <ProductListContainer>
        <HeaderContainer>
          <TextContainer>
            {userName ? (
              <>
                <h1>Olá {userName}!</h1>
                <h2>Seja bem-vindo!</h2>
              </>
            ) : (
              <h1>Olá Usuário!</h1>
            )}
          </TextContainer>

          <ButtonNewProduct onClick={() => handleSidebarClick('new-product')}>
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
            <h2>{filteredProducts.length}</h2>Total de Cadastros
          </h3>
        </RegistredProducts>
        <SearchProducts>
          <div>
            <SearchInput type="text" placeholder="Procurar..." value={searchQuery} onChange={handleSearchInputChange} />
            <SearchIcon>
              <FaSearch size={18} />
            </SearchIcon>
          </div>
          <p>Última atualização: 26 Feb 2024 10:45 AM</p>
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
            {filteredProducts.map((product) => {
              const date = new Date(product.dtCadastro);
              const monthNames = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
              const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

              return (
                <ListItem key={product.id}>
                  <Item>{product.dsProduto}</Item>
                  <Item>{product.dsCategoria}</Item>
                  <Item>{formattedDate}</Item>
                  <Item>{product.id}</Item>
                  <Item>{product.vlPreco}</Item>
                  <ActionButtons>
                    <Button1 onClick={() => handleEditClick(product)}>Editar</Button1>
                    <Button2 onClick={() => handleDelete(product.id)}>Excluir</Button2>
                  </ActionButtons>
                </ListItem>
              );
            })}
          </ul>
        </ListOfProducts>
      </ProductListContainer>
            
      <EditModal
        isEditModalOpen={isEditModalOpen}
        editingProduct={editingProduct}
        handleInputChange={handleInputChange}
        handleUpdateProduct={handleUpdateProduct}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default ProductList;
