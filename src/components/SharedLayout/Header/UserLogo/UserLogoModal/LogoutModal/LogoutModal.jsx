import Modal from 'react-bootstrap/Modal';
import {
  ModalContainer,
  ModalCloseBtn,
  OuestionText,
  BtnsWrapper,
  LogoutBtn,
  CanselBtn,
  CloseIcon,
} from './LogoutModal.styled';

export const LogoutModal = ({ show, hide }) => {
  const handleLogout = () => {
    console.log('Logout');
    hide();
  };
  return (
    <ModalContainer show={show} onHide={hide}>
      <ModalCloseBtn onClick={hide}>
        <CloseIcon />
      </ModalCloseBtn>
      <Modal.Body>
        <OuestionText>Are you sure you want to log out?</OuestionText>
        <BtnsWrapper>
          <LogoutBtn type="button" onClick={handleLogout}>
            Log out
          </LogoutBtn>
          <CanselBtn type="button" onClick={hide}>
            Cansel
          </CanselBtn>
        </BtnsWrapper>
      </Modal.Body>
    </ModalContainer>
  );
};
