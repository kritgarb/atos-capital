import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import apiService from '../services/apiService';
import {
  FormContainer,
  Title,
  SubTitle,
  Label,
  InputField,
  ButtonsFormNewProduct,
  Button,
  ButtonCancel,
} from '../styles/NewProductsStyles';

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
        newErrors.descricao = 'Description is required';
      }
      if (!codigo) {
        newErrors.codigo = 'Code is required';
      }
      if (!quantidade) {
        newErrors.quantidade = 'Quantity is required';
      }
      if (!categoria) {
        newErrors.categoria = 'Category is required';
      }
      if (!valor) {
        newErrors.valor = 'Unit price is required';
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
  
          alert('Product created successfully!');
  
          handleClose(); 
    
        } else {
          alert(response.data.message || 'Error creating product. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product. Please try again.');
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
        <Title>Create Product</Title>
        <SubTitle>Fill in the fields below to create a new product</SubTitle>

        <Label htmlFor="descricao">Description</Label>
        <InputField
          type="text"
          id="descricao"
          name="descricao"
          value={descricao}
          onChange={(e) => handleFieldChange('descricao', e.target.value)}
          placeholder="Product description"
        />
        {errors.descricao && <span>{errors.descricao}</span>}
        <Label htmlFor="codigo">Code</Label>
        <InputField
          type="text"
          id="codigo"
          name="codigo"
          value={codigo}
          onChange={(e) => handleFieldChange('codigo', e.target.value)}
          placeholder="Product code"
        />
        {errors.codigo && <span>{errors.codigo}</span>}
        <Label htmlFor="quantidade">Quantity</Label>
        <InputField
          type="number"
          id="quantidade"
          name="quantidade"
          value={quantidade}
          onChange={(e) => handleFieldChange('quantidade', e.target.value)}
          placeholder="Product quantity"
        />
        {errors.quantidade && <span>{errors.quantidade}</span>}
        <Label htmlFor="categoria">Category</Label>
        <InputField
          type="text"
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(e) => handleFieldChange('categoria', e.target.value)}
          placeholder="Product category"
        />
        {errors.categoria && <span>{errors.categoria}</span>}
        <Label htmlFor="valor">Unit Price</Label>
        <InputField
          type="number"
          id="valor"
          name="valor"
          value={valor}
          onChange={(e) => handleFieldChange('valor', e.target.value)}
          placeholder="Product unit price"
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
