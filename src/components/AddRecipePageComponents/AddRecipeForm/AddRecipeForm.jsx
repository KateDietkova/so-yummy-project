import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { descrFieldsSchema } from './validationAddRecipe';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { FormStyled } from './AddRecipeForm.styled';
import { IngredientsField } from './RecipeIngridientsFields/RecipeIngridientsFields';
import { PreparationField } from './RecipePreparationFields/RecipePreparationFields';
import { ButtonSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';
// import axios from 'axios';
// import { ErrorMessage } from 'formik';

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
  // const [categoryValue, setCategoryValue] = useState('Breakfast');
  // const [timeValue, setTimeValue] = useState('5 min');
  // const [selectedImgPath, setSelectedImgPath] = useState();
  // const [selectedImgFile, setSelectedImgFile] = useState();
  const [ingredients, setIngredients] = useState();
  const [preparation, setPreparation] = useState([]);
  // const [titleValue, setTitleValue] = useState('');
  // const [aboutValue, setAboutValue] = useState('');
  // const categoryList= useSelector(selectCategories)

  // const navigate = useNavigate();

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

  const pullDescrsData = (
    categoryValue,
    timeValue,
    selectedImgPath,
    selectedImgFile,
    titleValue,
    aboutValue
  ) => {
    // setCategoryValue(categoryValue);
    // setTimeValue(timeValue);
    // setSelectedImgPath(selectedImgPath);
    // setSelectedImgFile(selectedImgFile);
    // setTitleValue(titleValue);
    // setAboutValue(aboutValue);
  };

  // const submissionData = {
  //   title: titleValue,
  //   category: categoryValue,
  //   instructions: preparation,
  //   description: aboutValue,
  //   time: timeValue,
  //   thumb: selectedImgFile,
  //   ingredients,
  // };

  // const handleFormSubmit = async event => {

  //   console.log(submissionData);
  //   axios.post('/ownRecipes', submissionData);

  //   navigate('/my');
  // };

  //Then delete inner vars in IngredientsField !!!!!!!!!

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={descrFieldsSchema}
      onSubmit={values => console.log(values)}
    >
      <FormStyled>
        <RecipeDescriptionFields funct={pullDescrsData} />

        <IngredientsField funct={pullIngredientsData}>
          {ingredients}
          {preparation}
        </IngredientsField>
        <PreparationField funct={pullPreparationData} />
        <ButtonSkewStyled
          type="submit"
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
