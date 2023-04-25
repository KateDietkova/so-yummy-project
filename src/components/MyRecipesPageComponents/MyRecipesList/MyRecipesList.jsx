import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUserRecipe,
  fetchUserRecipes,
} from 'redux/recipes/recipesOperations';
import { RecipesList } from 'components/universalComponents/RecipesList/RecipesList';
// import { Loader } from 'components/universalComponents/Loader/Loader';

import {
  // selectIsLoading,
  // selectRecipesError,
  selectUserRecipes,
} from 'redux/recipes/recipesSelectors';

// axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';

export const MyRecipesList = () => {
  const userRecipes = useSelector(selectUserRecipes);
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectRecipesError);

  useEffect(() => {
    dispatch(fetchUserRecipes());
  }, [dispatch]);

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
      {/* {isLoading && <Loader />} */}
      {/* {isError && <Error />} */}
    </>
  );
};
