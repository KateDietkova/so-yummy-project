import {
  SectionHero,
  SectionHeroTitle,
  // SectionDescrip,
  RecipeDescription,
  RecipeTimer,
  RecipeTime,
  Button,
} from './RecipePageHero.styled';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { addToFavorite } from '../../../servicesApi/api';
import { selectUser } from "redux/auth/selectors";
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { useState } from 'react';



export const RecipePageHero = ({ title, description, time, favorites }) => {
  const user = useSelector(selectUser);
  console.log('fav', favorites);
  const [isFavorite, setIsFavorite] = useState(favorites?.includes(user._id) || false);
  
  
  const { recipeId } = useParams();
  
  const patchFavorite = async () => {
    const recipeInfo = 
      await addToFavorite(recipeId);
    console.log(recipeInfo);
    const favorite = recipeInfo.favorites.includes(user._id)
    setIsFavorite(favorite)
  };
  
  return (
    
      <SectionHero>
      
        <SectionHeroTitle>{title}</SectionHeroTitle>
      <RecipeDescription>{description}</RecipeDescription>
        <Button
        type="button"
        onClick={patchFavorite}
      >
       {isFavorite ? 'Remove from favorite recipes' : 'Add to favorite recipes'} 
        </Button>
        <RecipeTimer>
          <AiOutlineClockCircle color="black" />
          <RecipeTime>{time} min</RecipeTime>
      </RecipeTimer>
      
     </SectionHero>
    
  );
};

