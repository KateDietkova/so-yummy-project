import React from 'react';
import PropTypes from 'prop-types';
import { cookingTimeOptions } from 'helpers/helper';

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
  Wrapper,
} from './RecipeDescriptionFields.styled';
import { FormError } from '../validationAddRecipe';

export const RecipeDescriptionFields = ({
  handleUploadFile,
  handleCategoryInputChange,
  handleTimeInputChange,
  selectedImgPath,

  categoryValue,
  timeValue,

  titleValue,
  handleTitleInputChange,
  aboutValue,
  handleAboutInputChange,
}) => {
  const categoriesList = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];
  const categoryOptions = categoriesList.map(option => ({
    value: option.toLowerCase(),
    label: option,
  }));
  //

  // const getReduxData = () => {
  // const categoriesList = selectCategories();
  // if (list) {
  //   return list
  // }
  //  dispatch(fetchIngredients());
  // }

  //const categoriesList = getReduxData();

  ///  ф-ція отримання даних з редакс//

  return (
    <>
      <Wrapper>
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
              value={titleValue}
              onChange={e => handleTitleInputChange(e.label)}
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
              value={aboutValue}
              onChange={e => handleAboutInputChange(e.label)}
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
              isSearchable={false}
              classNamePrefix="Select"
              name="time"
              options={cookingTimeOptions}
              value={timeValue}
              placeholder={timeValue}
              onChange={e => handleTimeInputChange(e.label)}
            ></StyledSelect>
          </SelectWrapper>
        </FieldsWrapper>
      </Wrapper>
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
