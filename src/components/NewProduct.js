import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const FormContainer = styled.div`
  width: 936px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #e6f7ff;
  border-radius: 4px;
  background-color: #fff;

  font-family: 'poppins', sans-serif;
`;

const Title = styled.h1`
  text-align: start;
  font-size: 20px;
  font-weight: bold;
  color: #428bca;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  text-align: start;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
`;

const InputField = styled.input`
  width: 486px;
  height: 26px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;
  font-size: 14px;
  background-color: #F6F7F9;
  color: #333;
  &::placeholder {
    color: #999;
  }
`;

const ButtonsFormNewProduct = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
`;

const Button = styled.button`
  width: 200px;
  padding: 10px;
  background-color: #89131D;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border: 1px solid #89131D;
    background-color: #F6F7F9;
    color: #89131D;
  }
`;

const ButtonCancel = styled.button`
    width: 200px;
    padding: 10px;
    background-color: #fff;
    color: cancelar;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
     color: #89131D;
     border: 1px solid #89131D;
     background-color: #F6F7F9;
    }
`;

const NewProduct = () => {
  const [descricao, setDescricao] = useState('');
  const [codigo, setCodigo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implementar a lógica de envio do formulário
    // Exibir mensagem de sucesso ou erro
  };

  return (
    <FormContainer>
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Title>Informações sobre o Produto</Title>
      <SubTitle>Favor inserir as informações relativas ao produto que deseja cadastrar.</SubTitle>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="descricao">Descrição do Produto:</Label>
        <InputField
          type="text"
          id="descricao"
          placeholder="Descrição do Produto"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <Label htmlFor="codigo">Código do Produto:</Label>
        <InputField
          type="text"
          id="codigo"
          placeholder="Código do Produto"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <Label htmlFor="quantidade">Quantidade:</Label>
        <InputField
          type="number"
          id="quantidade"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <Label htmlFor="categoria">Categoria:</Label>
        <InputField
          type="text"
          id="categoria"
          placeholder="Categoria do Produto"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <Label htmlFor="valor">Valor unitário:</Label>
        <InputField
          type="number"
          id="valor"
          placeholder="Valor unitário"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </form>

      <ButtonsFormNewProduct>
        <Button type="submit">Cadastrar</Button>
        <ButtonCancel type="">Cancelar</ButtonCancel>
        </ButtonsFormNewProduct>
    </FormContainer>
  );
};

export default NewProduct;
