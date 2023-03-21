import { FC, ReactNode } from 'react';

import Modal from '@mui/material/Modal';

import * as S from './style';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: (value: boolean) => void;
}

const ModalComponent: FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.Container onClick={handleClose}>
        <S.Content onClick={e => e.stopPropagation()}>{children}</S.Content>
      </S.Container>
    </Modal>
  );
};

export default ModalComponent;
