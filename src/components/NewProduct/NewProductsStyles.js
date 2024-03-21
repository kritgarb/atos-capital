import styled from 'styled-components';

const FormContainer = styled.div`
  width: 936px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #e6f7ff;
  border-radius: 4px;
  background-color: #fff;

  font-family: 'poppins', sans-serif;
`;

const Title = styled.h1`
  text-align: start;
  font-size: 20px;
  font-weight: bold;
  color: #89131D;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  text-align: start;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
`;

const InputField = styled.input`
  width: 486px;
  height: 26px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;
  font-size: 14px;
  background-color: #F6F7F9;
  color: #333;
  &::placeholder {
    color: #999;
  }
`;

const ButtonsFormNewProduct = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
`;

const Button = styled.button`
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

const ButtonCancel = styled.button`
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

export {
  FormContainer,
  Title,
  SubTitle,
  Label,
  InputField,
  ButtonsFormNewProduct,
  Button,
  ButtonCancel,
};