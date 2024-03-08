import React from 'react';
import styled from 'styled-components';

const ProductListContainer = styled.div`
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductList = () => {

  const products = [
    { id: 1, name: 'Produto 1', price: 19.99 },
    { id: 2, name: 'Produto 2', price: 29.99 },
  ];

  return (
    <ProductListContainer>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <span>{`R$ ${product.price.toFixed(2)}`}</span>
          </li>
        ))}
      </ul>
    </ProductListContainer>
  );
};

export default ProductList;
