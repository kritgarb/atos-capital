import React from 'react';
import ArtImage from '../assets/img/Art.png';
import Logo from '../assets/img/Frame.png';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Container, FormContainer, Form, Title, Subtitle, Label, Input, Button, FormFooter, StyledLink, LogoImage } from '../styles/LoginStyle';

function Login() {
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
                        <Input type="email" placeholder="Digite seu email" />
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" placeholder="Digite sua senha" />
                        <Button>Login</Button>
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
