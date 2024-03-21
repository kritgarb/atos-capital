import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9e9e9;
    margin: 0;
  }
`;

const DashboardWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { GlobalStyle, DashboardWrapper, ContentWrapper };