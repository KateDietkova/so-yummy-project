import React from 'react';
import { useState } from 'react';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { fetchCategoriesList } from 'redux/categories/categoriesOperations';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useFormikContext } from 'formik';
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
import { useEffect } from 'react';

export const RecipeDescriptionFields = props => {
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
      selectedImgFile,
      titleValue,
      aboutValue
    );
  }, [
    categoryValue,
    timeValue,
    selectedImgFile,
    titleValue,
    aboutValue,
    props,
  ]);

  const dispatch = useDispatch();

  const categoriesList = useSelector(selectCategories);

  useEffect(() => {
    if (!categoriesList || categoriesList?.length === 0) {
      dispatch(fetchCategoriesList());
    }
  }, [dispatch, categoriesList]);

  const categoryOptions = categoriesList.map(option => ({
    value: option.toLowerCase(),
    label: option,
  }));

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
      toast.error('Please, upload the image file');
      return;
    }
    if (
      !['image/jpeg', 'image/jpg', 'image/web', 'image/png'].includes(file.type)
    ) {
      toast.error('You can upload only images');
      return;
    }
    if (!file.size > 2 * 1024 * 1024) {
      toast.error('File must be less than 2MB');
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
              isSearchable={false}
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
