
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
  CheckBox
} from './RecipeIngredientsList.styled';


const RecipeIngredientsList = ({ingredients}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIngredients())
  }, [dispatch]);
  // const currentIngredients = useSelector(selectIngredients);
  // if (!currentIngredients) {
  //   return;
  // }
// console.log('string', currentIngredients)
  return (
    <IngredientsListSection>
      <ListTitle>
        <ListSpan>Ingredients</ListSpan>
        <ListSpan>Number</ListSpan>
        <ListSpan>Add to list</ListSpan>
      </ListTitle>
      <IngredientsList>
        
          {ingredients}
            {/* <IngedientsItem key={currentIngredients._id}>
              <Wrap>
              <IngedientsImg>
                <Image src={currentIngredients.thb} alt={currentIngredients.ttl}></Image>
              </IngedientsImg> 
              <IngedientsTitle>{currentIngredients.ttl}</IngedientsTitle>
              </Wrap>
              <Wrap>
                <IngedientsMeasure>{currentIngredients.measure}</IngedientsMeasure>
                <CheckBox>
                </CheckBox>
              </Wrap>
           </IngedientsItem> */}
         
         
      </IngredientsList>
    </IngredientsListSection>
  );
};

export default RecipeIngredientsList;