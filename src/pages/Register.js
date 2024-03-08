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
                        <Title>Cadastre-se</Title>
                        <Subtitle>Preencha os campos para concluir o seu cadastro.</Subtitle>
                        <Label htmlFor="text">Nome</Label>
                        <Input type="text" placeholder="Digite seu nome..." />

                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="seuemail@email.com" />

                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" placeholder="Digite sua senha..." />

                        <Label htmlFor="password">Confirme sua Senha</Label>
                        <Input type="password" placeholder="Confirme sua senha..." />

                        <Button>Cadastrar</Button>
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

export default Login;
