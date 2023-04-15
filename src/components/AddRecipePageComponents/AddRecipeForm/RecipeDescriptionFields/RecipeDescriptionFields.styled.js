import styled from 'styled-components';
import { Field, Form } from 'formik';
import { ReactComponent as CameraIcon } from '../../../../assets/svg/other/camera.svg';

export const FormStyled = styled(Form)`
  display: flex;
  gap: 32px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const FieldFileWrapper = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  border-radius: 8px;

  background-color: ${props => props.theme.colors.accent};

  @media screen and (min-width: 1280px) {
    width: 357px;
    height: 344px;
  }
`;

export const ImageInput = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;

  cursor: pointer;
`;

export const StyledField = styled(Field)`
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-color: #e0e0e0;
  width: 100%;
  padding-bottom: 18px;

  &::placeholder {
    color: #000000;
    font-family: PoppinsRegular;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    opacity: 0.5;
  }
`;

export const CameraIconStyled = styled(CameraIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 393px;

  @media screen and (max-width: 767px) {
    width: 343px;
    gap: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;
