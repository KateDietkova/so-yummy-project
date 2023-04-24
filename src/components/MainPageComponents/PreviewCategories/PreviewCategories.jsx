import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { getAllByCategory } from 'redux/recipes/recipesOperations';
import { selectMainRecipesByCategory, selectIsLoading, selectRecipesError } from 'redux/recipes/recipesSelectors';

import { Container } from 'components/universalComponents/Container/Container.styled';
import { RecipesGallery } from 'components/universalComponents/RecipesGallery/RecipesGallery';
import { Loader } from 'components/universalComponents/Loader/Loader';

import {CategoriesWrapList, WrapperSeeAllBtn, SectionWrapper, WrapperOtherBtn, OtherCategoriesBtnLink, TitleCategories, SeeAllBtnLink } from './PreviewCategories.styled';


export const PreviewCategories = () => {
  const dispatch = useDispatch();
  const recipesByCategory = useSelector(selectMainRecipesByCategory);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectRecipesError);

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
    <SectionWrapper>
      <Container>
        {isLoading && <Loader />}
        <CategoriesWrapList>
        {filteredRecipes.length > 0 && filteredRecipes.map(({ category, recipes }) => (
          <li key={category}>
            <TitleCategories>{category}</TitleCategories>
            <RecipesGallery
              recipes={recipes.slice(
                0,
                isMobileDevice ? 1 : isTabletDevice ? 2 : 4
              )}
            />
            {recipes.length >=
              (isMobileDevice ? 1 : isTabletDevice ? 2 : 4) && (
              <WrapperSeeAllBtn>
                <SeeAllBtnLink to={`/categories/${category.toLowerCase()}`}>See all</SeeAllBtnLink>
                </WrapperSeeAllBtn>
            )}
          </li>
        ))}
          </CategoriesWrapList>
      <WrapperOtherBtn>
        <OtherCategoriesBtnLink to="/categories/beef">Other categories</OtherCategoriesBtnLink>
        </WrapperOtherBtn>
      </Container>

      {error && <p>Whoops, something went wrong...</p>}
    </SectionWrapper>
  );
};

export default PreviewCategories;
