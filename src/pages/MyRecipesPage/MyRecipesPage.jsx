import { useEffect, useState } from 'react';
import { MainTitle } from 'components/universalComponents/MainTitle/MainTitle';
import { MyRecipesList } from 'components/MyRecipesPageComponents/MyRecipesList/MyRecipesList';
import { MyRecipeContainer } from './MyRecipesPage.styled';
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
    <MyRecipeContainer>
      <MainTitle text="My recipes" />
      {isLoading && <Loader />}
      {isError ? (
        <Error />
      ) : (
        <>
          <MyRecipesList recipes={recipes} onClick={handleClickDeleteButton} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onClick={handleClickPaginationButton}
          />
        </>
      )}
    </MyRecipeContainer>
  );
};

export default MyRecipesPage;
