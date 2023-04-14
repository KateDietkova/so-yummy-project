import Modal from 'react-bootstrap/Modal';
import {
  ModalContainer,
  ModalCloseBtn,
  CloseIcon,
} from './UserInfoModal.styled';
import { UserInfoForm } from './UserInfoForm/UserInfoForm';

export const UserInfoModal = ({ showInfo, hide }) => {
  return (
    <ModalContainer show={showInfo} onHide={hide}>
      <ModalCloseBtn onClick={hide}>
        <CloseIcon />
      </ModalCloseBtn>
      <Modal.Body>
        <UserInfoForm closeModal={hide} />
      </Modal.Body>
    </ModalContainer>
  );
};
