import styled from 'styled-components';
import { Form, Field } from 'formik';
import { FiEdit2, FiUser } from 'react-icons/fi';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const UserPhotoWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 103px;
  height: 103px;
  background-color: lightgray;
`;

export const UploadBtn = styled.button`
  position: absolute;
  top: 78px;
  right: 7px;
  border: none;
  border-radius: 50%;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.accent};
  cursor: pointer;
`;

export const FieldStyled = styled(Field)`
  outline: none;
  padding: 16px 18px;
  padding-left: 50px;
  border-radius: 6px;
  border: 1px solid rgba(35, 38, 42, 0.3);
  background: ${props => props.theme.colors.textWhite};

  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.textDark};

  :focus:invalid {
    border-color: rgba(231, 74, 59, 0.3);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;

  &.photo {
    margin-bottom: 54px;
  }

  &.nameLabel {
    position: relative;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    &.photo {
      margin-bottom: 50px;
    }

    &.nameLabel {
      margin-bottom: 32px;
    }
  }
`;

export const EditIcon = styled(FiEdit2)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const UserIcon = styled(FiUser)`
  position: absolute;
  top: 16px;
  left: 18px;
`;

export const SaveChangeBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  width: 100%;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-size: 14px;
  line-height: 1.29;

  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.textWhite};
  transition: color ${props => props.theme.effects.mainEffect};

  :hover {
    color: ${props => props.theme.colors.bgBlackDark};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    padding: 21px;
  }
`;
