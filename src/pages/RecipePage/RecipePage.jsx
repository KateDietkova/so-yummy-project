
import RecipePageHero  from 'components/RecipePageComponents/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from 'components/RecipePageComponents/RecipeIngredientsList/RecipeIngredientsList';
import RecipePreparation from 'components/RecipePageComponents/RecipePreparation/RecipePreparation';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import { useDispatch } from 'react-redux';
import { fetchRecipe } from 'redux/recipes/recipesOperations';
import { selectRecipes,  selectIsLoading, selectRecipesError} from '../../redux/recipes/recipesSelectors';


const RecipePage = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const currentRecipe  = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectRecipesError);

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, [dispatch, recipeId]);

  if (!currentRecipe) {
    return ;
  }

  // const showError = error || !currentRecipe;
  console.log('string', currentRecipe)

    return (
      <>
        
        {currentRecipe &&  !isLoading && (
          
          <>
            <RecipePageHero
              title={currentRecipe.title}
              description={currentRecipe.description}
              time={currentRecipe.time}
            />
            <RecipeIngredientsList ingredients={currentRecipe.ingredients} />
            <RecipePreparation instructions={currentRecipe.instructions} foto={currentRecipe.thumb} />
          </>
        )}
      </>
    
    );
};

export default RecipePage;
