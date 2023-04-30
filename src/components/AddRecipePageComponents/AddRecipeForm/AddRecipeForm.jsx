import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { descrFieldsSchema } from './validationAddRecipe';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { FormStyled, AddButton } from './AddRecipeForm.styled';
import { IngredientsField } from './RecipeIngridientsFields/RecipeIngridientsFields';
import { PreparationField } from './RecipePreparationFields/RecipePreparationFields';

import axios from 'axios';

axios.defaults.baseURL = ' https://so-yummy-api-jvk2.onrender.com/api';

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
  const [category, setCategory] = useState('Breakfast');
  const [time, setTime] = useState('5 min');
  const [selectedImgFile, setSelectedImgFile] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState([]);
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');

  const navigate = useNavigate();

  const pullPreparationData = data => {
    setPreparation(data);
  };

  const pullIngredientsData = useCallback(data => {
    const newArray = data.map(item => {
      return {
        id: item.ingredient.value,
        measure: item.quantity + ' ' + item.measure,
      };
    });

    setIngredients(newArray);
  }, []);

  const pullDescrsData = useCallback(
    (category, time, selectedImgFile, title, about) => {
      setCategory(category);
      setTime(Number.parseInt(time));
      setSelectedImgFile(selectedImgFile);
      setTitle(title);
      setAbout(about);
    },
    []
  );

  const submissionData = {
    title,
    category,
    instructions: preparation,
    description: about,
    time,
    ingredients,
  };

  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append('image', selectedImgFile);
    

    const { data } = await axios.post('/ownRecipes', submissionData);
    const id = data.recipe._id;
   

    if (selectedImgFile) {
      await axios.patch(`/ownRecipes/${id}`, formData);
      
    }

    navigate('/my');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={descrFieldsSchema}
      onSubmit={handleFormSubmit}
    >
      <FormStyled>
        <RecipeDescriptionFields funct={pullDescrsData} />
        <IngredientsField funct={pullIngredientsData}></IngredientsField>
        <PreparationField funct={pullPreparationData} />
        <AddButton type="submit" width={'129px'} padding={0} color={props => 
    props.theme.darkTheme
      ? props.theme.colors.accent
      : props.theme.colors.bgBlackDark
  }>
          <div className="inner">{'Add'}</div>
        </AddButton >
      </FormStyled>
    </Formik>
  );
};
