import React from 'react';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';

import {
  AddFileInput,
  AddFileInputWrapper,
  CameraIconStyled,
  FieldsWrapper,
  PositionBox,
  SelectWrapper,
  StyledField,
  StyledPhotoRecipe,
  StyledSelectLabel,
} from './RecipeDescriptionFields.styled';
import { FormError } from '../validationAddRecipe';

export const RecipeDescriptionFields = ({
  handleUploadFile,
  handleCategoryInputChange,
  handleTimeInputChange,
  selectedImgPath,
  selectedImgFile,
  categoryOptions,
  categoryValue,
  timeValue,
  cookingTimeOptions,
}) => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' });

  const selectInputStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft: 'auto',
      border: 'none',
      fontFamily: 'PoppinsRegular',
      fontWeight: '400',
      fontSize: isMobileScreen ? '12px' : '14px',
      lineHeight: '1',
      letterSpacing: '-0.02em',
      color: '#000000',
      boxShadow: 'none',
    }),
    singleValue: styles => {
      return { ...styles, paddingBottom: '10px' };
    },
    option: (styles, { data, isSelected, isFocused }) => {
      return {
        ...styles,
        fontFamily: 'PoppinsRegular',
        fontWeight: '400',
        fontSize: isMobileScreen ? '12px' : '14px',
        lineHeight: '0.7',
        letterSpacing: '-0.02em',
        color: '#000000',
        opacity: '0.5',
        cursor: 'pointer',
        backgroundColor: '#ffffff',
      };
    },
    menu: (styles, { data }) => {
      return {
        ...styles,
        position: 'absolute',
        top: '25px',
        right: 0,
        width: isMobileScreen ? '123px' : '132px',
        height: isMobileScreen ? '144px' : '162px',
        margin: 0,
        backgroundColor: '#FFFFFF',
        boxShadow: ' 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
        borderRadius: ' 6px',
        cursor: 'pointer',
      };
    },
    menuList: (styles, { isFocused }) => {
      return {
        ...styles,
        width: isMobileScreen ? '123px' : '132px',
        height: isMobileScreen ? '144px' : '162px',
        margin: 0,
        overflowY: 'scroll',
        backgroundColor: '#FFFFFF',
        borderRadius: ' 6px',
        cursor: 'pointer',
      };
    },
    dropdownIndicator: () => ({
      marginRight: '5px',
      marginLeft: '13px',
      marginBottom: '23px',
      width: '10px',
      height: '5px',
      color: '#8BAA36',
      cursor: 'pointer',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    placeholder: styles => {
      return {
        ...styles,
        paddingBottom: '10px',
        fontFamily: 'PoppinsRegular',
        fontWeight: '400',
        fontSize: isMobileScreen ? '12px' : '14px',
        lineHeight: '1',
        color: '#000000',
      };
    },
  };

  return (
    <>
      <AddFileInputWrapper>
        <CameraIconStyled />
        <AddFileInput
          type="file"
          accept="image/*,.png,.jpg,.web,.gif,.png"
          name="image"
          onChange={handleUploadFile}
        ></AddFileInput>
        {selectedImgPath && (
          <StyledPhotoRecipe
            alt="recipe"
            src={selectedImgPath}
            width="100%"
            height="100%"
          />
        )}
      </AddFileInputWrapper>

      <FieldsWrapper>
        <PositionBox>
          <StyledField
            type="text"
            name="title"
            placeholder="Enter item title"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
          ></StyledField>
          <FormError name="title" />
        </PositionBox>
        <PositionBox>
          <StyledField
            type="text"
            name="about"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Enter about recipe"
            required
            pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
          ></StyledField>
          <FormError name="about" />
        </PositionBox>
        <SelectWrapper>
          <StyledSelectLabel>Category</StyledSelectLabel>
          <Select
            styles={selectInputStyles}
            name="category"
            options={categoryOptions}
            value={categoryValue}
            placeholder={categoryValue}
            onChange={e => handleCategoryInputChange(e.label)}
          ></Select>
        </SelectWrapper>
        <SelectWrapper>
          <StyledSelectLabel>Cooking time</StyledSelectLabel>
          <Select
            styles={selectInputStyles}
            name="time"
            options={cookingTimeOptions}
            value={timeValue}
            placeholder={timeValue}
            onChange={e => handleTimeInputChange(e.label)}
          ></Select>
        </SelectWrapper>
      </FieldsWrapper>
    </>
  );
};
