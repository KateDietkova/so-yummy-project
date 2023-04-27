import {
  SectionHero,
  SectionHeroTitle,
  RecipeDescription,
  RecipeTimer,
  RecipeTime,
  Button,
} from './RecipePageHero.styled';

import { AiOutlineClockCircle } from 'react-icons/ai';
import {  addToFavorite } from 'servicesApi/api';




export const RecipePageHero = ({title, description, time, recipeId, isFavorite}) => {
 
  const addFavorite = () => {
    console.log('add');
    if (isFavorite === false) {
      return addToFavorite(recipeId);
    }
  };
  
  return (
    <SectionHero>
        <SectionHeroTitle>{title}</SectionHeroTitle>
        <RecipeDescription>{description}</RecipeDescription>
      <Button
        type="button"
        aria-label="add/remove to favorite"
        onClick={addFavorite}
      >
       {isFavorite 
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

