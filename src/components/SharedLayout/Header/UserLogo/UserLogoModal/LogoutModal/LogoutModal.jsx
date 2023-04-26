import Modal from 'react-bootstrap/Modal';
import {
  ModalContainer,
  ModalCloseBtn,
  OuestionText,
  BtnsWrapper,
  LogoutBtn,
  CancelBtn,
  CloseIcon,
} from './LogoutModal.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';

export const LogoutModal = ({ show, hide }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
          <CancelBtn type="button" onClick={hide}>
            Cancel
          </CancelBtn>
        </BtnsWrapper>
      </Modal.Body>
    </ModalContainer>
  );
};
