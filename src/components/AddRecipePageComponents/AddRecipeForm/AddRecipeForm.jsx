import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { descrFieldsSchema } from './validationAddRecipe';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { FormStyled, AddButton } from './AddRecipeForm.styled';
import { IngredientsField } from './RecipeIngridientsFields/RecipeIngridientsFields';
import { PreparationField } from './RecipePreparationFields/RecipePreparationFields';
import { ButtonSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';
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

  const pullIngredientsData = useCallback((data) => {
    const newArray = data.map(item => {
      return {
        id: item.ingredient.value,
        measure: item.quantity + ' ' + item.measure,
      };
    });

    setIngredients(newArray);
  }, [])

  // const formikProps = useFormikContext();

  // const setFormikValue = (name, value) => {
  //   formikProps.setFieldValue(name, value);
  // };

  const pullDescrsData = useCallback((category,
    time,
    selectedImgFile,
    title,
    about )=> {
      setCategory(category);
      setTime(time);
      setSelectedImgFile(selectedImgFile);
      setTitle(title);
      setAbout(about);

  }, [])

  const submissionData = {
    title,
    category,
    instructions: preparation,
    description: about,
    time,
    ingredients,
  };

  const  handleFormSubmit = async () => {
  
    const formData = new FormData();
    formData.append('image', selectedImgFile);
    console.log(submissionData)
    

    const {data} = await axios.post('/ownRecipes', submissionData);
    const id = (data.recipe._id);
    console.log(selectedImgFile, id)
    
   
    if (selectedImgFile) {
      const result = await axios.patch(`/ownRecipes/${id}`, formData);
      console.log("img patch", result)
    }

    navigate('/my');
    
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={descrFieldsSchema}
      onSubmit={values=> console.log(values, submissionData)}
     
    >
      <FormStyled>
        <RecipeDescriptionFields funct={pullDescrsData} />
        <IngredientsField funct={pullIngredientsData}></IngredientsField>
        <PreparationField funct={pullPreparationData} />
        <AddButton
          type="submit"
          width={'129px'}
          padding={0}
         
        >
          <div className="inner">{'Add'}</div>
        </AddButton>
      </FormStyled>
    </Formik>
  );
};
