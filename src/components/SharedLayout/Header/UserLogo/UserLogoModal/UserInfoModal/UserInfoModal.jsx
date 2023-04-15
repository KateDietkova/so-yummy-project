import Modal from 'react-bootstrap/Modal';
import {
  ModalContainer,
  ModalCloseBtn,
  CloseIcon,
} from './UserInfoModal.styled';
import { UserInfoForm } from './UserInfoForm/UserInfoForm';
import { useSelector } from 'react-redux';

export const UserInfoModal = ({ showInfo, hide}) => {
 const darkTheme = useSelector(state => state.theme.darkTheme);
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
