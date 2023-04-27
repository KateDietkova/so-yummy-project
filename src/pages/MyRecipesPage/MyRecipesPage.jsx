import { useEffect, useState } from 'react';
import { MainTitle } from 'components/universalComponents/MainTitle/MainTitle';
import { MyRecipesList } from 'components/MyRecipesPageComponents/MyRecipesList/MyRecipesList';
import {
  MyRecipeContainer,
  RecipeListContainer,
  StyledText,
} from './MyRecipesPage.styled';
import { Pagination } from 'components/universalComponents/Pagination/Pagination';
import { deleteUserRecipe, fetchUserRecipes } from 'servicesApi/api';
import { Loader } from 'components/universalComponents/Loader/Loader';
import { Error } from 'components/MyRecipesPageComponents/Error';

const MyRecipesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState();
  const [limit, setLimit] = useState();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchOwnRecipes = async () => {
      setIsLoading(true);
      const data = await fetchUserRecipes(currentPage);

      if (data.name === 'AxiosError') {
        setIsError(true);
      }

      const totalCount = data.count;
      setCount(totalCount);

      const limit = data.limit;
      setLimit(limit);
      setIsLoading(false);

      const recipes = data.data;
      setRecipes(recipes);
    };

    fetchOwnRecipes();
  }, [currentPage]);

  const totalPages = Math.ceil(count / limit);

  const handleClickPaginationButton = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleClickDeleteButton = id => {
    deleteUserRecipe(id);
    setRecipes(recipes.filter(recipe => recipe._id !== id));
  };

  return (
    <MyRecipeContainer id="container">
      <MainTitle text="My recipes" />
      {isLoading && <Loader />}
      {isError ? (
        <Error />
      ) : (
        <RecipeListContainer>
          <MyRecipesList
            style={{ minHeight: '1766px' }}
            recipes={recipes}
            onClick={handleClickDeleteButton}
          />
          {recipes?.length > 0 ? (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onClick={handleClickPaginationButton}
              scrollId={'container'}
            />
          ) : (
            <>
              <StyledText>You don't have any recipe.</StyledText>
              <StyledText>
                Please, go to the "Add recipes"page and save your recipe :)
              </StyledText>
            </>
          )}
        </RecipeListContainer>
      )}
    </MyRecipeContainer>
  );
};

export default MyRecipesPage;
