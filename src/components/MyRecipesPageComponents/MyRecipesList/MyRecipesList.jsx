import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUserRecipe,
  fetchUserRecipes,
} from 'redux/recipes/recipesOperations';
import { RecipesList } from 'components/universalComponents/RecipesList/RecipesList';
import { Loader } from 'components/universalComponents/Loader/Loader';

import {
  selectIsLoading,
  selectRecipesError,
  selectUserRecipes,
} from 'redux/recipes/recipesSelectors';
import { Error } from '../Error';

export const MyRecipesList = () => {
  const userRecipes = useSelector(selectUserRecipes);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectRecipesError);
  const dispatch = useDispatch();

  useEffect(() => {
    userRecipes.length === 0 && dispatch(fetchUserRecipes());
  }, [dispatch, userRecipes]);

  const handleClickDeleteButton = id => {
    dispatch(deleteUserRecipe(id));
  };

  return (
    <>
      <RecipesList
        recipes={userRecipes}
        type="my"
        onClick={handleClickDeleteButton}
      />
      {isLoading && <Loader />}
      {isError && <Error />}
    </>
  );
};
