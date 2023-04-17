
import RecipePageHero  from "components/RecipePageComponents/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "components/RecipePageComponents/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "components/RecipePageComponents/RecipePreparation/RecipePreparation";
import {
  RecipeSection,
 
} from './RecipePage.styled';
const RecipePage = () => {

  
  return (
    <RecipeSection>
      <RecipePageHero />
      <RecipeIngredientsList />
      <RecipePreparation />
    </RecipeSection> 
    
  )
};

export default RecipePage;