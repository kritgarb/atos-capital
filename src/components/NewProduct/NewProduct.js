import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import apiService from '../../services/apiService';
import {
  FormContainer,
  Title,
  SubTitle,
  Label,
  InputField,
  ButtonsFormNewProduct,
  Button,
  ButtonCancel,
} from './NewProductsStyles';

const NewProduct = ({ handleClose }) => {
  const [descricao, setDescricao] = useState('');
  const [codigo, setCodigo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (fieldName, value) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    switch (fieldName) {
      case 'descricao':
        setDescricao(value);
        break;
      case 'codigo':
        setCodigo(value);
        break;
      case 'quantidade':
        setQuantidade(value);
        break;
      case 'categoria':
        setCategoria(value);
        break;
      case 'valor':
        setValor(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const newErrors = {};
      if (!descricao) {
        newErrors.descricao = 'Descrição é obrigatória';
      }
      if (!codigo) {
        newErrors.codigo = 'Código é obrigatório';
      }
      if (!quantidade) {
        newErrors.quantidade = 'Quantidade é obrigatória';
      }
      if (!categoria) {
        newErrors.categoria = 'Categoria é obrigatória';
      }
      if (!valor) {
        newErrors.valor = 'Valor é obrigatório';
      }
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        const produtoData = {
          dsProduto: descricao,
          dsCategoria: categoria,
          cdProduto: codigo,
          vlProduto: parseFloat(valor.replace(',', '.')), 
          qtdProduto: parseInt(quantidade), 
        };
  
        const response = await apiService.registredProduct(produtoData);
  
        if (response.ok) {
          setDescricao('');
          setCodigo('');
          setQuantidade('');
          setCategoria('');
          setValor('');
  
          alert('Produto Cadastrado com Sucesso!');
  
          handleClose(); 
    
        } else {
          alert(response.data.message || 'Erro ao cadastrar produto. Tente novamente.');
        }
      }
    } catch (error) {
      console.error('Erro ao criar Produto:', error);
      alert('Erro ao criar Produto. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <>
      <FormContainer>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Title>Cadastro de Produto</Title>
        <SubTitle>Favor inserir as informações relativas ao produto que deseja cadastrar.</SubTitle>

        <Label htmlFor="descricao">Descrição</Label>
        <InputField
          type="text"
          id="descricao"
          name="descricao"
          value={descricao}
          onChange={(e) => handleFieldChange('descricao', e.target.value)}
          placeholder="Descição do Produto"
        />
        {errors.descricao && <span>{errors.descricao}</span>}
        <Label htmlFor="codigo">Código</Label>
        <InputField
          type="text"
          id="codigo"
          name="codigo"
          value={codigo}
          onChange={(e) => handleFieldChange('codigo', e.target.value)}
          placeholder="Código do Produto"
        />
        {errors.codigo && <span>{errors.codigo}</span>}
        <Label htmlFor="quantidade">Quantidade</Label>
        <InputField
          type="number"
          id="quantidade"
          name="quantidade"
          value={quantidade}
          onChange={(e) => handleFieldChange('quantidade', e.target.value)}
          placeholder="Quantidade do Produto"
        />
        {errors.quantidade && <span>{errors.quantidade}</span>}
        <Label htmlFor="categoria">Categoria</Label>
        <InputField
          type="text"
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(e) => handleFieldChange('categoria', e.target.value)}
          placeholder="Categoria do Produto"
        />
        {errors.categoria && <span>{errors.categoria}</span>}
        <Label htmlFor="valor">Valor</Label>
        <InputField
          type="number"
          id="valor"
          name="valor"
          value={valor}
          onChange={(e) => handleFieldChange('valor', e.target.value)}
          placeholder="Valor do Produto"
        />
        {errors.valor && <span>{errors.valor}</span>}
        <ButtonsFormNewProduct>
          <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
            Create
          </Button>
          <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
        </ButtonsFormNewProduct>
      </FormContainer>
    </>
  );
};

export default NewProduct;
