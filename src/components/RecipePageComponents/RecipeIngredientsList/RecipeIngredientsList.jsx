import {useSelector } from 'react-redux';
import { selectIngredients } from 'redux/ingredients/ingredientsSelectors';
// import { getShoppingList } from 'servicesApi/api';
// import { useEffect } from 'react';
import {
  IngredientsListSection,
  ListTitle,
  ListSpan,
  IngredientsList,
  IngedientsItem,
  Wrap,
  Image,
  IngedientsTitle,
  IngedientsMeasure,
  CheckBox,
} from './RecipeIngredientsList.styled';



export const RecipeIngredientsList = ({ ingredients}) => {
 const allIngredients = useSelector(selectIngredients);


  const selectIngred = allIngredients
    .filter(ingredient =>
      ingredients
        .map(recipeIngredient => recipeIngredient.id)
        .includes(ingredient._id)
    )
    .map(ingredient => ({
      ...ingredient,
      measure: ingredients.find(
        recipeIngredient => recipeIngredient.id === ingredient._id
      ).measure,
    }));

  console.log('ingred', selectIngred);
   
  
  return (
    <IngredientsListSection>
      <ListTitle>
        <ListSpan>Ingredients</ListSpan>
        <ListSpan>Number</ListSpan>
        <ListSpan>Add to list</ListSpan>
      </ListTitle>
      <IngredientsList>
        {selectIngred.map(({ _id, ttl, thb, measure }) => {
            return (
              <IngedientsItem key={_id}>
                <Wrap>
                  <Image src={thb} alt={ttl} />
                  <IngedientsTitle>{ttl}</IngedientsTitle>
                </Wrap>
                     <Wrap>
                  <IngedientsMeasure >{measure}</IngedientsMeasure>
                
                  
               
                  <CheckBox
                  //   ingredientsId={_id}
                  //   isCheck={ingredMeasure}
                  // measure={measure}
                  >
                  </CheckBox>
                </Wrap>
              </IngedientsItem>
            )
          })
        }
            </IngredientsList>
    </IngredientsListSection>
  );
};
