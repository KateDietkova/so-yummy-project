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
  Image,
  IngedientsTitle,
  IngedientsMeasure,
  CheckBox,
} from './RecipeIngredientsList.styled';

import IngredientsPlaceholder from '../../../assets/images/desktop/mocks/recipe-photo-default-2x.jpg';

export const RecipeIngredientsList = ({ ingredients }) => {
  const allIngredients = useSelector(selectIngredients);

  const ingredientsId = ingredients.map(data => data.id);

  const selectIngred = allIngredients.filter(data => {
    if (ingredientsId.includes(data._id)) return data;
  });

  console.log('ingred', selectIngred);
  return (
    <IngredientsListSection>
      <ListTitle>
        <ListSpan>Ingredients</ListSpan>
        <ListSpan>Number</ListSpan>
        <ListSpan>Add to list</ListSpan>
      </ListTitle>
      <IngredientsList>
        {ingredients &&
          selectIngred.map(({ _id, ttl, thb, measure }) => {
            return (
              <IngedientsItem key={_id}>
                <Wrap>
                  <Image src={thb} alt={ttl} />
                  <IngedientsTitle>{ttl}</IngedientsTitle>
                </Wrap>
                <Wrap>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <CheckBox></CheckBox>
                </Wrap>
              </IngedientsItem>
            );
          })}
      </IngredientsList>
    </IngredientsListSection>
  );
};
