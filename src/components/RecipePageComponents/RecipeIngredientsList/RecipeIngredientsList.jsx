import { useSelector, useDispatch } from 'react-redux';
import { selectIngredients } from 'redux/ingredients/ingredientsSelectors';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';
// import { getShoppingList } from 'redux/shoppingList/shoppingListOperations';
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
  
} from './RecipeIngredientsList.styled';
import IngredientsPlaceholder from '../../../assets/images/desktop/mocks/recipe-photo-default-2x.jpg'
import { Checkbox } from './CheckBox/CheckBox';


export const RecipeIngredientsList = ({ ingredients }) => {
//  const dispatch = useDispatch();
 const shoppingList = useSelector(selectShoppingList);

// useEffect(() => {
//   dispatch(getShoppingList());
//   },[dispatch]);


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
         if (!_id) {
            return null;
          }
          const isChecked = shoppingList.some((item) => item.ingredId === _id && item.measure[0] === measure );
          return (
            <IngedientsItem key={_id}>
                <Wrap>
                  <Image src={thb ? thb : IngredientsPlaceholder} alt={ttl} />
                  <IngedientsTitle>{ttl}</IngedientsTitle>
                </Wrap>
                     <Wrap>
                  <IngedientsMeasure >{measure}</IngedientsMeasure>
                <Checkbox
                  ingredient={{ _id, ttl, thb }}
                  isChecked={isChecked}
                  measure={measure}
                   />
                </Wrap>
              </IngedientsItem>
            )
          })
        }
            </IngredientsList>
    </IngredientsListSection>
  );
};
