import React from 'react';
import {
    Modal,
    ModalContainer,
    ModalHeader,
    InputLabel,
    InputField,
    Button,
    CloseButton,
    Buttons
} from './ModalStyles';

const EditModal = ({ isEditModalOpen, editingProduct, handleInputChange, handleUpdateProduct, handleCloseModal }) => {
  return (
    isEditModalOpen && (
      <Modal>
        <ModalContainer>
          <ModalHeader>Editar Produto</ModalHeader>
          <InputLabel>
            Descrição:
            <InputField
              type="text"
              value={editingProduct.dsProduto}
              onChange={(e) => handleInputChange('dsProduto', e.target.value)}
            />
          </InputLabel>
          <InputLabel>
            Categoria:
            <InputField
              type="text"
              value={editingProduct.dsCategoria}
              onChange={(e) => handleInputChange('dsCategoria', e.target.value)}
            />
          </InputLabel>
          <Buttons>
          <Button onClick={() => handleUpdateProduct(editingProduct.id)}>Salvar Alterações</Button>
          <CloseButton onClick={handleCloseModal}>Fechar Modal</CloseButton>
          </Buttons>
        </ModalContainer>
      </Modal>
    )
  );
};

export default EditModal;
