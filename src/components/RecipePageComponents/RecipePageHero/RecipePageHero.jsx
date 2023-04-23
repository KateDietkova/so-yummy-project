import {
  SectionHero,
  SectionHeroTitle,
  RecipeDescription,
  RecipeTimer,
  RecipeTime,
  Button,
} from './RecipePageHero.styled';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecipeById } from 'servicesApi/api';
import { fetchRecipe } from 'redux/recipes/recipesOperations';


const RecipePageHero = ({ title, description, time }) => {
  // const { recipeId } = useParams();
  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRecipe(recipeId));
  // }, [dispatch]);
  return (
    <SectionHero>
        <SectionHeroTitle>{title}</SectionHeroTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <Button>
        Add to favorite recipes
        </Button>
        <RecipeTimer>
          <AiOutlineClockCircle color="black" />
          <RecipeTime>{time} min</RecipeTime>
        </RecipeTimer>
    </SectionHero>
  );
};

export default RecipePageHero;