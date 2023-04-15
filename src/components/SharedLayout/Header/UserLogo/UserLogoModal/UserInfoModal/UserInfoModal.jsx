import Modal from 'react-bootstrap/Modal';
import {
  ModalContainer,
  ModalCloseBtn,
  CloseIcon,
} from './UserInfoModal.styled';
import { UserInfoForm } from './UserInfoForm/UserInfoForm';

export const UserInfoModal = ({ showInfo, hide, darkTheme }) => {
  return (
    <ModalContainer
      show={showInfo}
      onHide={hide}
      darktheme={darkTheme ? 'true' : 'false'}
    >
      <ModalCloseBtn onClick={hide}>
        <CloseIcon darktheme={darkTheme ? 'true' : 'false'} />
      </ModalCloseBtn>
      <Modal.Body>
        <UserInfoForm closeModal={hide} darkTheme={darkTheme} />
      </Modal.Body>
    </ModalContainer>
  );
};
