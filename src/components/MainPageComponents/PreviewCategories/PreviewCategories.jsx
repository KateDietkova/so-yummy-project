import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getAllByCategory } from 'redux/recipes/recipesOperations';
import { selectMainRecipesByCategory } from 'redux/recipes/recipesSelectors';

export const PreviewCategories = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectMainRecipesByCategory);
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getAllByCategory(categoryName));
  }, [dispatch, categoryName]);

  return (
    <div className="category-recipes">
      {recipes &&
        recipes.map(recipe => (
          <PreviewCategories key={recipe.id} recipe={recipe} />
        ))}
    </div>
  );
};

export default PreviewCategories;
