import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  StyledLink,
  LogoImage,
} from '../styles/LoginStyle';

function Login() {
  const history = useHistory(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      const result = await apiService.loginUser(userData);
      console.log('Login successful:', result);

      localStorage.setItem('authToken', result.access_token);

      history.push('/produtos');
    } catch (error) {
      console.error('Login failed:', error);
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
            <Title>Olá! 👋</Title>
            <Subtitle>Faça login para começar a gerenciar seus produtos.</Subtitle>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Digite seu email" value={email} onChange={handleEmailChange} />
            <Label htmlFor="password">Senha</Label>
            <Input type="password" placeholder="Digite sua senha" value={password} onChange={handlePasswordChange} />
            <Button onClick={handleLogin}>Login</Button>
          </Form>
          <FormFooter>
            <p>ou <hr size="1"></hr></p>
            <p>
              Não possui senha?{' '}
              <StyledLink href="/register">Cadastre-se!</StyledLink>
            </p>
            <LogoImage src={Logo} alt="" />
          </FormFooter>
        </FormContainer>
        <img src={ArtImage} alt="" style={{ width: '816px', height: '1070px' }} />
      </Container>
    </>
  );
}

export default Login;
