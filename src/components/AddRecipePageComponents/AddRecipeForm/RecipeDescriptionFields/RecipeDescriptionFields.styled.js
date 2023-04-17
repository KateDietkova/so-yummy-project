import styled from 'styled-components';
import { Field, Form } from 'formik';
import { ReactComponent as CameraIcon } from '../../../../assets/svg/other/camera.svg';

export const FormStyled = styled(Form)`
  display: flex;
  gap: 32px;
  margin-bottom: 300px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 67px; */
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const AddFileInputWrapper = styled.div`
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

export const AddFileInput = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;

  cursor: pointer;
`;

export const StyledPhotoRecipe = styled.img`
  z-index: 50;
  position: relative;
  object-fit: cover;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 0;
  padding-bottom: 18px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-color: #e0e0e0;
  background-color: ${props => props.theme.colors.textWhite};
  font-size: ${props => props.theme.fontSizes.s};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }

  &::placeholder {
    color: #000000;
    font-family: PoppinsRegular;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.5;
    letter-spacing: -0.02em;
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.m};
    }
  }
`;

export const StyledSelectLabel = styled.label`
  padding-bottom: 18px;
  font-family: PoppinsRegular;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;
  letter-spacing: -0.02em;
  opacity: 0.5;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-color: #e0e0e0;
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

export const ErrorValidation = styled.span`
  display: block;
  padding-top: 5px;

  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.colors.validateRed};

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -23px;
    left: 0;
  }
`;

export const PositionBox = styled.div`
  position: relative;
`;
