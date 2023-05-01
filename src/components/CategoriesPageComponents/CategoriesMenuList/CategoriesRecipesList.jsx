import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchRecipesByCategory } from 'redux/categories/categoriesOperations';
import {
  selectRecipesByCategory,
  selectCategoriesIsLoading,
  selectCategoriesRecipesError,
} from 'redux/categories/categoriesSelectors';
import { Loader } from 'components/universalComponents/Loader/Loader';
import { Pagination } from 'components/universalComponents/Pagination/Pagination';
import { RecipesGallery } from 'components/universalComponents/RecipesGallery/RecipesGallery';
import { CategoriesContainer } from './CategoriesRecipesList.styled';

export const CategoriesRecipesList = () => {
  const recipes = useSelector(selectRecipesByCategory);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const error = useSelector(selectCategoriesRecipesError);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(fetchRecipesByCategory({ categoryName, page, limit: 8 })).then(
      data => {
        // console.log(data.payload.count)
        setTotalPages(Math.ceil(data.payload.count / 8));
      }
    );
  }, [dispatch, categoryName, page]);

  useEffect(() => {
    setPage(1);
    setTotalPages(prevPage => prevPage + 1);
  }, [categoryName]);

  const handleClickPaginationButton = page => {
    setPage(page);
  };

  return (
    <CategoriesContainer id="container">
      {recipes?.length > 0 && !isLoading && (
        <RecipesGallery recipes={recipes} />
      )}
      {recipes?.length > 0 && (
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onClick={handleClickPaginationButton}
          scrollId="container"
        />
      )}
      {isLoading && <Loader />}
      {error && <p>Whoops, something went wrong...</p>}
    </CategoriesContainer>
  );
};
