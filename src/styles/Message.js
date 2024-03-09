import styled from 'styled-components';

const Message = styled.div`
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s, color 0.3s; /* Adiciona transição suave */

  ${(props) => {
    if (props.success) {
      return `
        background-color: #15A309;
        color: white;
      `;
    }
    if (props.error) {
      return `
        background-color: #FF3A3A;
        color: white;
      `;
    }
  }}
`;

export default Message;