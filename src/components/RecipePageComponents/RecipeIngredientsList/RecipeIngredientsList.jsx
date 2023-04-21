
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIngredients } from 'redux/ingredients/ingredientsSelectors';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';
import {
  IngredientsListSection,
  ListTitle,
  ListSpan,
  IngredientsList,
  IngedientsItem,
  Wrap,
  IngedientsImg,
  IngedientsTitle,
  IngedientsMeasure
 
} from './RecipeIngredientsList.styled';


const RecipeIngredientsList = ({ingredients}) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllIngredients())
  // },[dispatch]);
  // const ingredients = useSelector(selectIngredients);

  return (
    <IngredientsListSection>
      <ListTitle>
        <ListSpan>Ingredients</ListSpan>
        <ListSpan>Number</ListSpan>
        <ListSpan>Add to list</ListSpan>
      </ListTitle>
      <IngredientsList>
         
        <IngedientsItem>{ingredients}</IngedientsItem>
          
        
           
      </IngredientsList>
    </IngredientsListSection>
  );
};

export default RecipeIngredientsList;