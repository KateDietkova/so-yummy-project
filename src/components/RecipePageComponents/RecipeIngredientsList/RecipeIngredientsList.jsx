
import { useSelector } from 'react-redux';
import { selectIngredients } from 'redux/ingredients/ingredientsSelectors';

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
        
        { 
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
