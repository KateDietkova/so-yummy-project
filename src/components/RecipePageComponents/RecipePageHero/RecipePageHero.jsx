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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFavorite, deleteFromFavorite, addToFavorite } from 'servicesApi/api';
import { selectFavoritesRecipes } from 'redux/recipes/recipesSelectors';



export const RecipePageHero = ({ title, description, time }) => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesRecipes);

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);
   
  const inFavoriteCollection = favorites.find(item => item._id === recipeId);

  function toggleFavorite() {
    if(inFavoriteCollection){
      dispatch(deleteFromFavorite(recipeId));
    } else {
      dispatch(addToFavorite(recipeId));
  }
  }
  
  return (
    <SectionHero>
        <SectionHeroTitle>{title}</SectionHeroTitle>
        <RecipeDescription>{description}</RecipeDescription>
      <Button
        type="button"
        aria-label="add/remove to favorite"
        onClick={toggleFavorite}
      >
        {inFavoriteCollection
          ? 'Remove from favorite recipes'
          : 'Add to favorite recipes'
        }
        </Button>
        <RecipeTimer>
          <AiOutlineClockCircle color="black" />
          <RecipeTime>{time} min</RecipeTime>
        </RecipeTimer>
    </SectionHero>
  );
};

