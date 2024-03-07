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
export default GlobalStyle;