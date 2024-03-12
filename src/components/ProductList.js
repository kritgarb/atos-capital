import React, { useState, useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Helmet } from 'react-helmet';
import { FaSearch } from 'react-icons/fa';
import apiService from '../services/apiService';
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
} from '../styles/ProductListStyles';

const ProductList = ({ handleSidebarClick }) => {
  const [products, setProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

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
            <h1>Olá Usuário!</h1>
            <h2>Seja bem-vindo!</h2>
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
            <h2>{products.length}</h2>Total de Cadastros
          </h3>
        </RegistredProducts>
        <SearchProducts>
          <div>
            <SearchInput type="text" placeholder="Procurar..." />
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

          {products.map((product) => (
            <ul key={product.id}>
              <ListItem>
                <Item>
                  {product.dsProduto}
                  {product.dsCategoria}
                  {product.dtCadastro}
                  {product.cdProduto}
                  {`R$ ${Number(product.vlProduto).toFixed(2).replace('.', ',')}`}
                </Item>
                <ActionButtons>
                  <Button1 onClick={() => handleEditClick(product)}>Editar</Button1>
                  <Button2 onClick={() => handleDelete(product.id)}>Excluir</Button2>
                </ActionButtons>
              </ListItem>
            </ul>
          ))}
        </ListOfProducts>
      </ProductListContainer>

      {/* Modal */}
      {isEditModalOpen && (
        <div className="modal">
          <h2>Editar Produto</h2>
          <label>
            Descrição:
            <input
              type="text"
              value={editingProduct.dsProduto}
              onChange={(e) => handleInputChange('dsProduto', e.target.value)}
            />
          </label>
          <label>
            Categoria:
            <input
              type="text"
              value={editingProduct.dsCategoria}
              onChange={(e) => handleInputChange('dsCategoria', e.target.value)}
            />
          </label>
          <button onClick={() => handleUpdateProduct(editingProduct.id)}>Salvar Alterações</button>
          <button onClick={handleCloseModal}>Fechar Modal</button>
        </div>
      )}
    </>
  );
};

export default ProductList;
