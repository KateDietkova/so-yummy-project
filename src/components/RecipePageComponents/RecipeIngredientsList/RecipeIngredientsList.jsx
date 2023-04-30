import { useSelector } from 'react-redux';
import { selectIngredients } from 'redux/ingredients/ingredientsSelectors';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';
import { getShoppingList } from 'redux/shoppingList/shoppingListOperations';

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
import IngredientsPlaceholder from '../../../assets/images/desktop/mocks/recipe-photo-default-2x.jpg';
import { Checkbox } from './CheckBox/CheckBox';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export const RecipeIngredientsList = ({ ingredients }) => {
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

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
  useEffect(() => {
   dispatch(getShoppingList())
},[dispatch])

  return (
    <IngredientsListSection>
      <ListTitle>
        <ListSpan>Ingredients</ListSpan>
        <ListSpan>Number</ListSpan>
        <ListSpan>Add to list</ListSpan>
      </ListTitle>
      <IngredientsList>
        {selectIngred.map(({ _id, ttl, thb, measure }) => {
         
          const isCheckedIngredientsID = shoppingList.filter(item => {
            if (item.id === _id) {
              console.log('item.id', item.id);
              return item.id;
            }
            return null;
          });
          const isChecked = isCheckedIngredientsID.length !== 0;
          return (
            <IngedientsItem key={_id}>
              <Wrap>
                <Image src={thb ? thb : IngredientsPlaceholder} alt={ttl} />
                <IngedientsTitle>{ttl}</IngedientsTitle>
              </Wrap>
              <Wrap>
                <IngedientsMeasure>{measure?.split(" ").slice(0, 4).join(" ")}</IngedientsMeasure>
                <Checkbox
                  ingredient={{ _id, ttl, thb, measure }}
                  isChecked={isChecked}
                  idIngredientsShoppingList={isCheckedIngredientsID[0]?._id}
                />
              </Wrap>
            </IngedientsItem>
          );
        })}
      </IngredientsList>
    </IngredientsListSection>
  );
};
