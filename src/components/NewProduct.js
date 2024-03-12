import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormContainer, Title, SubTitle, Label, InputField, ButtonsFormNewProduct, Button, ButtonCancel } from '../styles/NewProductsStyles';
import apiService from '../services/apiService';


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
        newErrors.valor = 'Valor unitário é obrigatório';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        const response = await apiService.cadastrarProduto({ descricao, codigo, quantidade, categoria, valor });

        if (response.ok) {
          setDescricao('');
          setCodigo('');
          setQuantidade('');
          setCategoria('');
          setValor('');

          alert('Produto cadastrado com sucesso!');

          handleClose();
        } else {
          alert(response.data.message || 'Erro ao cadastrar produto. Tente novamente.');
        }
      }
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <FormContainer>
        <Helmet>
            
        </Helmet>
        <Title>Cadastrar Produto</Title>
        <SubTitle>Preencha os campos abaixo para cadastrar um novo produto</SubTitle>

        <Label htmlFor="descricao">Descrição</Label>
        <InputField
          type="text"
          id="descricao"
          name="descricao"
          value={descricao}
          onChange={(e) => handleFieldChange('descricao', e.target.value)}
          placeholder="Descrição do produto"
        />
        {errors.descricao && <span>{errors.descricao}</span>}
        <Label htmlFor="codigo">Código</Label>
        <InputField
          type="text"
          id="codigo"
          name="codigo"
          value={codigo}
          onChange={(e) => handleFieldChange('codigo', e.target.value)}
          placeholder="Código do produto"
        />
        {errors.codigo && <span>{errors.codigo}</span>}
        <Label htmlFor="quantidade">Quantidade</Label>
        <InputField
          type="number"
          id="quantidade"
          name="quantidade"
          value={quantidade}
          onChange={(e) => handleFieldChange('quantidade', e.target.value)}
          placeholder="Quantidade do produto"
        />
        {errors.quantidade && <span>{errors.quantidade}</span>}
        <Label htmlFor="categoria">Categoria</Label>
        <InputField
          type="text"
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(e) => handleFieldChange('categoria', e.target.value)}
          placeholder="Categoria do produto"
        />
        {errors.categoria && <span>{errors.categoria}</span>}
        <Label htmlFor="valor">Valor Unitário</Label>
        <InputField
          type="number"
          id="valor"
          name="valor"
          value={valor}
          onChange={(e) => handleFieldChange('valor', e.target.value)}
          placeholder="Valor unitário do produto"
        />
        {errors.valor && <span>{errors.valor}</span>}

        <ButtonsFormNewProduct>
          <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
            Cadastrar
          </Button>
          <ButtonCancel onClick={handleClose}>Cancelar</ButtonCancel>
        </ButtonsFormNewProduct>
      </FormContainer>
    </>
  );
};

export default NewProduct;
