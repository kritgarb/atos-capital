import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        background-color: #ffffff;
    }

    body {
        font-family: 'Poppins', sans-serif;

        margin: 0;  

        background-color: #f5f5f5;
    }

    :root {
        --red-button: #89131D;
        --grey-text: #313957;
        --grey-stroke: #D4D7E3;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.div`
    width: 816px;
    height: 1076px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 16px;  
    padding: 24px;  
`;

const Form = styled.div`
    width: 100%;
    max-width: 400px;  
    height: auto;  

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 16px;
`;

const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 36px;

    color: var(--grey-text);
`;

const Subtitle = styled.p`
    width: 80%;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;

    color: var(--grey-text);
`;

const Input = styled.input`
    width: 100%;
    height: 48px;

    padding: 8px;
    border-radius: 12px;
    border: 1px solid rgba(245, 245, 245, 0.7);

    placeholder: #8897AD;
    background-color: #F7FBFF;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
    :focus,
    :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background-color: var(--red-button);
    color: #FFFFFF;
    outline: 0;
    margin-top: 0.6rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-out, transform 0.2s ease-out;

    :hover {
        background-color: darken(var(--red-button), 10%);
        transform: translateY(-2px);
    }
`;

const Label = styled.label`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;

    margin-bottom: -10px;
`;
const FormFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 22px;
    margin-top: 16px;
`;
    
const StyledLink = styled.a`
    font-family: "Roboto", sans-serif;
    text-decoration: none;

    color: #1E4AE9;
`;

const LogoImage = styled.img`
    width: 173.8px;
`;

export {
    GlobalStyle,
    Container,
    FormContainer,
    Form,
    Title,
    Subtitle,
    Input,
    Button,
    Label,
    FormFooter,
    StyledLink,
    LogoImage
};