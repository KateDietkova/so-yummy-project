import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { getAllByCategory } from 'redux/recipes/recipesOperations';
import { selectMainRecipesByCategory } from 'redux/recipes/recipesSelectors';

import { RecipesGallery } from 'components/universalComponents/RecipesGallery/RecipesGallery';

export const PreviewCategories = () => {
  const dispatch = useDispatch();
  const recipesByCategory = useSelector(selectMainRecipesByCategory);
  const { categoryName } = useParams();
  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  useEffect(() => {
    dispatch(getAllByCategory(categoryName));
  }, [dispatch, categoryName]);

  const filteredRecipes = recipesByCategory.filter(({ category }) => {
    const allowedCategories = [
      'Breakfast',
      'Miscellaneous',
      'Chicken',
      'Dessert',
    ];
    return allowedCategories.includes(category);
  });

  return (
    <>
      <div>
        {filteredRecipes.map(({ category, recipes }) => (
          <li key={category}>
            <p>{category}</p>
            <RecipesGallery
              recipes={recipes.slice(
                0,
                isMobileDevice ? 1 : isTabletDevice ? 2 : 4
              )}
            />
            {recipes.length >=
              (isMobileDevice ? 1 : isTabletDevice ? 2 : 4) && (
              <Link to={`/categories/${category.toLowerCase()}`}>See all</Link>
            )}
          </li>
        ))}
      </div>
      <div>
        <Link to="/categories">Other categories</Link>
      </div>
    </>
  );
};

export default PreviewCategories;
