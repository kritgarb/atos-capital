import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtImage from '../assets/img/Art.png';
import Message from '../styles/Message';
import Logo from '../assets/img/Frame.png';
import { Helmet } from 'react-helmet';
import apiService from '../services/apiService';
import {
  GlobalStyle,
  Container,
  FormContainer,
  Form,
  Title,
  Subtitle,
  Label,
  Input,
  Button,
  FormFooter,
  LogoImage,
} from '../styles/LoginStyle';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setRegistrationStatus(null);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setRegistrationStatus(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setRegistrationStatus(null);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setRegistrationStatus(null);
  };

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        setRegistrationStatus('error');
        return;
      }

      const userData = { name, email, password };
      const result = await apiService.registerUser(userData);
      console.log('Registration successful:', result);

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      setRegistrationStatus('success');

      setTimeout(() => {
        navigate('/login'); 
      }, 1000);
    } catch (error) {
      console.error('Registration failed:', error);
      setRegistrationStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" />
      </Helmet>
      <GlobalStyle />
      <Container>
        <FormContainer>
          <Form>
            <Title>Cadastre-se</Title>
            <Subtitle>Preencha os campos para concluir o seu cadastro.</Subtitle>
            <Label htmlFor="name">Nome</Label>
            <Input type="text" placeholder="Digite seu nome" value={name} onChange={handleNameChange} />

            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Digite seu email" value={email} onChange={handleEmailChange} />

            <Label htmlFor="password">Senha</Label>
            <Input type="password" placeholder="Digite sua senha" value={password} onChange={handlePasswordChange} />

            <Label htmlFor="confirmPassword">Confirme sua Senha</Label>
            <Input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />

            <Button onClick={handleRegister}>Cadastrar</Button>
            {registrationStatus === 'success' && (
              <Message success>Registro bem-sucedido! Você pode fazer login agora.</Message>
            )}
            {registrationStatus === 'error' && (
              <Message error>
                Ops! Algo deu errado. Confira suas informações e tente novamente.
              </Message>
            )}
          </Form>
          <FormFooter>
            <LogoImage src={Logo} alt="" />
          </FormFooter>
        </FormContainer>
        <img src={ArtImage} alt="" style={{ width: '816px', height: '1070px' }} />
      </Container>
    </>
  );
}

export default Register;
