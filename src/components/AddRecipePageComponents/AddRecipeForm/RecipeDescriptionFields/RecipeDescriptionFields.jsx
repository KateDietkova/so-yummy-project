import React from 'react';
import PropTypes from 'prop-types';

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
  StyledSelect,
} from './RecipeDescriptionFields.styled';
import { FormError } from '../validationAddRecipe';

export const RecipeDescriptionFields = ({
  handleUploadFile,
  handleCategoryInputChange,
  handleTimeInputChange,
  selectedImgPath,
  categoryOptions,
  categoryValue,
  timeValue,
  cookingTimeOptions,
}) => {
  return (
    <>
      <AddFileInputWrapper>
        <CameraIconStyled />
        <AddFileInput
          type="file"
          accept="image/*,.png,.jpg,.web,.png"
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
          <StyledSelect
            classNamePrefix="Select"
            name="category"
            options={categoryOptions}
            value={categoryValue}
            placeholder={categoryValue}
            onChange={e => handleCategoryInputChange(e.label)}
          ></StyledSelect>
        </SelectWrapper>
        <SelectWrapper>
          <StyledSelectLabel>Cooking time</StyledSelectLabel>
          <StyledSelect
            classNamePrefix="Select"
            name="time"
            options={cookingTimeOptions}
            value={timeValue}
            placeholder={timeValue}
            onChange={e => handleTimeInputChange(e.label)}
          ></StyledSelect>
        </SelectWrapper>
      </FieldsWrapper>
    </>
  );
};

RecipeDescriptionFields.propTypes = {
  handleUploadFile: PropTypes.func.isRequired,
  handleCategoryInputChange: PropTypes.func.isRequired,
  handleTimeInputChange: PropTypes.func.isRequired,
  selectedImgPath: PropTypes.string,
  categoryOptions: PropTypes.arrayOf(PropTypes.shape).isRequired,
  categoryValue: PropTypes.string.isRequired,
  timeValue: PropTypes.string.isRequired,
  cookingTimeOptions: PropTypes.array.isRequired,
};
