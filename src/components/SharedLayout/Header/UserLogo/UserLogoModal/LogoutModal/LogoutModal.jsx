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
import { useSelector } from 'react-redux';

export const LogoutModal = ({ show, hide }) => {
   const darkTheme = useSelector(state => state.theme.darkTheme);
  const handleLogout = () => {
    console.log('Logout');
    hide();
  };
  return (
    <ModalContainer
      show={show}
      onHide={hide}
      darktheme={darkTheme ? 'true' : 'false'}
    >
      <ModalCloseBtn onClick={hide}>
        <CloseIcon darktheme={darkTheme ? 'true' : 'false'} />
      </ModalCloseBtn>
      <Modal.Body>
        <OuestionText darktheme={darkTheme ? 'true' : 'false'}>
          Are you sure you want to log out?
        </OuestionText>
        <BtnsWrapper>
          <LogoutBtn type="button" onClick={handleLogout}>
            Log out
          </LogoutBtn>
          <CanselBtn
            type="button"
            onClick={hide}
            darktheme={darkTheme ? 'true' : 'false'}
          >
            Cansel
          </CanselBtn>
        </BtnsWrapper>
      </Modal.Body>
    </ModalContainer>
  );
};
