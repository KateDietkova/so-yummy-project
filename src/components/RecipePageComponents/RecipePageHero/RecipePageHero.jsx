import {
  SectionHero,
  SectionHeroTitle,
  RecipeDescription,
  RecipeTimer,
  RecipeTime,
  Button,
} from './RecipePageHero.styled';

import { AiOutlineClockCircle } from 'react-icons/ai';


 const RecipePageHero = ({ title, description, time  }) => {
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