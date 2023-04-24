import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { descrFieldsSchema } from './validationAddRecipe';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { FormStyled } from './AddRecipeForm.styled';
// import { cookingTimeOptions } from '../../../helpers/helper';
import { IngredientsField } from './RecipeIngridientsFields/RecipeIngridientsFields';
import { PreparationField } from './RecipePreparationFields/RecipePreparationFields';
import { ButtonSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';
import axios from 'axios';
import { ErrorMessage } from 'formik';

// import { useSelector } from 'react-redux';

//categoryList взяти з беку
// GET: /api/recipes/category-list heder:Autorization: Bearer token
// axios.defaults.baseURL = ' https://so-yummy-api.herokuapp.com/api';

// const categoryOptions = categoryList.map(option => ({
//   value: option.toLowerCase(),
//   label: option,
// }));

const initialValues = {
  thumb: '',
  title: '',
  about: '',
  time: '5 min',
  category: 'Breakfast',
  ingredients: [
    {
      id: '',
      ingredient: '',
      quantity: '1',
      measure: 'tbs',
    },
  ],

  preparation: '',
};

export const AddRecipeForm = () => {
  const [categoryValue, setCategoryValue] = useState('Breakfast');
  const [timeValue, setTimeValue] = useState('5 min');
  const [selectedImgPath, setSelectedImgPath] = useState();
  const [selectedImgFile, setSelectedImgFile] = useState();
  const [ingredients, setIngredients] = useState();
  const [preparation, setPreparation] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [aboutValue, setAboutValue] = useState('');
  // const categoryList= useSelector(selectCategories)

  const navigate = useNavigate();

  const pullIngredientsData = data => {
    const newArray = data.map(item => {
      return {
        id: item.ingredient.value,
        measure: item.quantity + ' ' + item.measure,
      };
    });
    setIngredients(newArray);
  };

  const pullPreparationData = data => {
    setPreparation(data);
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
  };
  const handleTimeInputChange = value => {
    setTimeValue(value);
  };

  const handleTitleInputChange = value => {
    setTitleValue(value);
  };

  const handleAboutInputChange = value => {
    setAboutValue(value);
  };

  const submissionData = {
    title: titleValue,
    category: categoryValue,
    instructions: preparation,
    description: aboutValue,
    time: timeValue,
    thumb: selectedImgFile,
    ingredients,
  };

  const handleFormSubmit = async event => {
    // event.preventDefault();
    console.log(submissionData);
    axios.post('/ownRecipes', submissionData);
    // const descFieldsValues = {
    //   ...values,
    //   category: categoryValue,
    //   time: timeValue,
    //   thumb: selectedImgFile,
    // };
    // console.log(descFieldsValues);

    // setCategoryValue('Breakfast');
    // setTimeValue('5 min');
    // navigate('/my');
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
          categoryValue={categoryValue}
          timeValue={timeValue}
          titleValue={titleValue}
          aboutValue={aboutValue}
          handleTitleInputChange={handleTitleInputChange}
          handleAboutInputChange={handleAboutInputChange}
        />

        <IngredientsField funct={pullIngredientsData}></IngredientsField>

        <PreparationField funct={pullPreparationData} />

        <ButtonSkewStyled
          type="submit"
          // onClick={handleFormSubmit}
          color={props => {
            return props.theme.darkTheme
              ? props.theme.colors.accent
              : props.theme.colors.bgBlackDark;
          }}
          hoverColor={props => {
            return !props.theme.darkTheme
              ? props.theme.colors.accent
              : props.theme.colors.bgBlackDark;
          }}
          width={'129px'}
          padding={0}
        >
          <div className="inner">{'Add'}</div>
        </ButtonSkewStyled>
      </FormStyled>
    </Formik>
  );
};

// let formData = new FormData();
// formData.append('thumb', selectedImgFile);
// formData.append('title', values.title);
// formData.append('about', values.about);
// formData.append('category', categoryValue);
// formData.append('time', timeValue);
// console.log(formData.get('thumb'));
