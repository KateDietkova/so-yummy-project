import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { descrFieldsSchema } from './validationAddRecipe';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { FormStyled } from './RecipeDescriptionFields/RecipeDescriptionFields.styled';
import { cookingTimeOptions } from '../../../helpers/helper';

//categoryList взяти з беку
// GET: /api/recipes/category-list heder:Autorization: Bearer token
const categoryList = [
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

const categoryOptions = categoryList.map(option => ({
  value: option.toLowerCase(),
  label: option,
}));

const initialValues = {
  thumb: '',
  title: '',
  about: '',
};

export const AddRecipeForm = () => {
  const [categoryValue, setCategoryValue] = useState('Breakfast');
  const [timeValue, setTimeValue] = useState('5 min');
  const [selectedImgPath, setSelectedImgPath] = useState();
  const [selectedImgFile, setSelectedImgFile] = useState();

  const navigate = useNavigate();

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
      ![
        'image/jpeg',
        'image/jpg',
        'image/web',
        'image/gif',
        'image/png',
      ].includes(file.type)
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
  };
  const handleTimeInputChange = value => {
    setTimeValue(value);
  };

  const handleFormSubmit = (values, { resetForm }) => {
    const descFieldsValues = {
      ...values,
      category: categoryValue,
      time: timeValue,
      thumb: selectedImgFile,
    };
    console.log(descFieldsValues);
    resetForm();
    setCategoryValue('Breakfast');
    setTimeValue('5 min');
    navigate('/my');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={descrFieldsSchema}
      onSubmit={handleFormSubmit}
    >
      <FormStyled>
        <RecipeDescriptionFields
          handleUploadFile={handleUploadFile}
          handleCategoryInputChange={handleCategoryInputChange}
          handleTimeInputChange={handleTimeInputChange}
          selectedImgPath={selectedImgPath}
          selectedImgFile={selectedImgFile}
          categoryOptions={categoryOptions}
          cookingTimeOptions={cookingTimeOptions}
          categoryValue={categoryValue}
          timeValue={timeValue}
        />
      </FormStyled>
    </Formik>
  );
};

// let formData = new FormData();
// formData.append('thumb', selectedImgFile);
// formData.append('title', values.title);
// formData.append('about', values.about);
// formData.append('category', categoryValue);
// formData.append('about', timeValue);
// console.log(formData.get('thumb'));
