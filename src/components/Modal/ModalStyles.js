import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  width: 70%;
  max-width: 500px;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 20px;
  font-size: 18px;
  color: #555;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
width: 200px;
padding: 10px;
background-color: #89131D;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
&:hover {
  border: 1px solid #89131D;
  background-color: #F6F7F9;
  color: #89131D;
}
`;

export const CloseButton = styled.button`
width: 200px;
padding: 10px;
background-color: #fff;
color: cancelar;
border: none;
border-radius: 4px;
cursor: pointer;
&:hover {
 color: #89131D;
 border: 1px solid #89131D;
 background-color: #F6F7F9;
}
`;
