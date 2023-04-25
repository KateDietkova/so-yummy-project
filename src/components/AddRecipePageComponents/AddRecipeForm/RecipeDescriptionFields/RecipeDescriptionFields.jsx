import React from 'react';
// import PropTypes from 'prop-types';
import { cookingTimeOptions } from 'helpers/helper';
import { useState } from 'react';
import { useFormikContext } from 'formik';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { fetchCategoriesList } from 'redux/categories/categoriesOperations';
import { useDispatch, useSelector } from 'react-redux';

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
import { useEffect } from 'react';

export const RecipeDescriptionFields = props => {
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

  const [categoryValue, setCategoryValue] = useState('Breakfast');
  const [timeValue, setTimeValue] = useState('5 min');
  const [selectedImgPath, setSelectedImgPath] = useState();
  const [selectedImgFile, setSelectedImgFile] = useState();
  const [titleValue, setTitleValue] = useState('');
  const [aboutValue, setAboutValue] = useState('');

  useEffect(() => {
    props.funct(
      categoryValue,
      timeValue,
      selectedImgPath,
      selectedImgFile,
      titleValue,
      aboutValue
    );
  }, [
    categoryValue,
    timeValue,
    selectedImgPath,
    selectedImgFile,
    titleValue,
    aboutValue,
  ]);

    // const dispatch = useDispatch();

  // const categoriesList = useSelector(selectCategories)


  // useEffect(() => {
  //   if (!categoriesList) {
  //   dispatch(fetchCategoriesList())
  
  // }}, [dispatch, categoriesList]);
   
  ///  ф-ція отримання даних з редакс//



  const formikProps = useFormikContext();

  const setFormikValue = (name, value) => {
    formikProps.setFieldValue(name, value);
  };

  const handleUploadFile = e => {
    const file = e.target.files[0];
    const fileURL = file && URL.createObjectURL(file);
    setSelectedImgFile(file);
    setSelectedImgPath(fileURL);

    if (!file) {
      alert('Please, upload the image file');
      return;
    }
    if (
      !['image/jpeg', 'image/jpg', 'image/web', 'image/png'].includes(file.type)
    ) {
      alert('You can upload only images');
      return;
    }
    if (!file.size > 2 * 1024 * 1024) {
      alert('File must be less than 2MB');
      return;
    }
  };

  const handleCategoryInputChange = value => {
    setCategoryValue(value);
    setFormikValue('category', value);
  };
  const handleTimeInputChange = value => {
    setTimeValue(value);
    setFormikValue('time', value);
  };

  const handleTitleInputChange = value => {
    setTitleValue(value);
    setFormikValue('title', value);
  };

  const handleAboutInputChange = value => {
    setAboutValue(value);
    setFormikValue('about', value);
  };


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
              onChange={e => handleTitleInputChange(e.currentTarget.value)}
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
              onChange={e => handleAboutInputChange(e.currentTarget.value)}
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

// RecipeDescriptionFields.propTypes = {
//   handleUploadFile: PropTypes.func.isRequired,
//   handleCategoryInputChange: PropTypes.func.isRequired,
//   handleTimeInputChange: PropTypes.func.isRequired,
//   selectedImgPath: PropTypes.string,
//   categoryOptions: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   categoryValue: PropTypes.string.isRequired,
//   timeValue: PropTypes.string.isRequired,
//   cookingTimeOptions: PropTypes.array.isRequired,
// };
