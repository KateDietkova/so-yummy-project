import styled from 'styled-components';
import { Field } from 'formik';
import Select from 'react-select';
import { ReactComponent as CameraIcon } from '../../../../assets/svg/other/camera.svg';

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

export const StyledPhotoRecipe = styled.img`
  z-index: 50;
  position: relative;
  object-fit: cover;
`;

export const CameraIconStyled = styled(CameraIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
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

export const PositionBox = styled.div`
  position: relative;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 0;
  padding-bottom: 18px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-color: #e0e0e0;
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};
  font-size: ${props => props.theme.fontSizes.s};
  color: ${props => {
    return props.theme.darkTheme ? props.theme.colors.textWhite : '#000000';
  }};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }

  &::placeholder {
    color: ${props =>
      props.theme.darkTheme ? props.theme.colors.textWhite : '#000000'};
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

export const StyledSelectLabel = styled.label`
  padding-bottom: 18px;
  font-family: PoppinsRegular;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;
  letter-spacing: -0.02em;
  opacity: 0.5;
  color: ${props => (props.theme.darkTheme ? '#fff' : '#000000')};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const StyledSelect = styled(Select)`
  .Select__control {
    outline: green;
    height: 42px;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    border: none;
    font-family: PoppinsRegular;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.02em;
    box-shadow: none;
    color: ${props => {
      return props.theme.darkTheme ? '#000' : props.theme.colors.textWhite;
    }};
    background-color: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.bgdarkTheme
        : props.theme.colors.textWhite;
    }};
    @media screen and (max-width: 767px) {
      font-size: 12px;
      height: 39px;
    }
  }

  .Select__single-value {
    padding-bottom: 10px;
  }

  .Select__option {
    padding: 0;
    padding-bottom: 4px;
    font-family: PoppinsRegular;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => {
      return props.theme.darkTheme ? props.theme.colors.textWhite : '#000000';
    }};
    opacity: 0.5;
    cursor: pointer;

    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
  }

  .Select__menu {
    position: absolute;
    top: 28px;
    right: 0px;
    width: 132px;
    height: 162px;
    margin: 0;
    padding: 8px 4px 8px 18px;
    background-color: ${props => {
      return props.theme.darkTheme ? props.theme.colors.accent : '#fff';
    }};
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    border-radius: 6px;
    cursor: pointer;

    @media screen and (max-width: 767px) {
      width: 123px;
      height: 144px;
      padding: 8px 4px 8px 14px;
    }
  }

  .Select__menu-list {
    margin: 0;
    padding: 0;
    height: 146px;
    overflow-y: scroll;
    background-color: ${props => {
      return props.theme.darkTheme ? props.theme.colors.accent : '#fff';
    }};
    border-radius: 6px;
    cursor: pointer;

    @media screen and (max-width: 767px) {
      height: 128px;
    }
  }
  .Select__menu-list::-webkit-scrollbar {
    width: 4px;
    height: 93px;
  }
  .Select__menu-list::-webkit-scrollbar-track {
    background: #ffffff;
  }
  .Select__menu-list::-webkit-scrollbar-thumb {
    background: ${props => {
      return props.theme.darkTheme ? props.theme.colors.bgdarkTheme : '#e7e5e5';
    }};

    border-radius: 2px;
    width: 4px;
    height: 93px;
  }

  .Select__dropdown-indicator {
    padding-right: 5px;
    padding-left: 5px;
    margin-left: -3px;
    margin-bottom: 30px;
    color: ${props => props.theme.colors.accent};
    cursor: pointer;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__placeholder {
    padding-bottom: 32px;
    font-family: PoppinsRegular;
    font-weight: 400;
    font-size: 14px;
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
    line-height: 1;
    color: ${props => {
      return props.theme.darkTheme ? props.theme.colors.textWhite : '#000000';
    }};
  }
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
