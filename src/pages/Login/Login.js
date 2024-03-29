import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArtImage from '../../assets/img/Art.png';
import Message from '../../styles/Message';
import Logo from '../../assets/img/Frame.png';
import { Helmet } from 'react-helmet';
import apiService from '../../services/apiService'; 
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
} from './LoginStyle';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setLoginStatus(null); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginStatus(null); 
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const userData = { email, password };
      const result = await apiService.loginUser(userData);
      console.log('Resposta do servidor após login:', result); 
  
      localStorage.setItem('token', result.data.access_token); 
      setLoginStatus('success'); 
      setLoading(false);
      navigate('/Dashboard');
    } catch (error) {
      console.error('Login falhou:', error);
      setLoginStatus('error');
      setLoading(false);
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
          {loginStatus === 'success' ? ( 
            <Message success>Login bem-sucedido!</Message>
          ) : (
            <Form>
              <Title>Olá! </Title>
              <Subtitle>Faça login para começar a gerenciar seus produtos.</Subtitle>
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Digite seu email" value={email} onChange={handleEmailChange} />
              <Label htmlFor="password">Senha</Label>
              <Input type="password" placeholder="Digite sua senha" value={password} onChange={handlePasswordChange} />
              <Button disabled={loading} onClick={handleLogin}>{loading ? 'Carregando...' : 'Login'}</Button>
              {loginStatus === 'error' && <Message error>Ops! Algo deu errado. Confira suas credenciais, por favor.</Message>}
            </Form>
          )}
          <FormFooter>
            <p>ou <hr size="1"></hr></p>
            <p>
              Não possui senha?{' '}
              <Link to="/register">Cadastre-se!</Link>
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
