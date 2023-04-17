
import {
  IngredientsListSection,
  ListTitle,
  ListSpan,
 
} from './RecipeIngredientsList.styled';


const RecipeIngredientsList = () => {
    
  return (
    <IngredientsListSection>
      <ListTitle>
        <ListSpan>Ingredients</ListSpan>
        <ListSpan>Number</ListSpan>
        <ListSpan>Add to list</ListSpan>
      </ListTitle>
    </IngredientsListSection>
  );
};

export default RecipeIngredientsList;