import { MainTitle } from 'components/universalComponents/MainTitle/MainTitle';
import { Pagination } from 'components/universalComponents/Pagination/Pagination';

import { MyFavoriteContainer, H3,  RecipeListContainer } from './FavoritesPage.styled'
import { Loader } from 'components/universalComponents/Loader/Loader';
import { Error } from 'components/MyRecipesPageComponents/Error';
import { useEffect, useState } from 'react';
import { FavoriteRecipesList} from '../../components/FavoriteList/FavoriteList';
import { deleteUserFavoriteRecipe, fetchUserFavoriteRecipes } from 'servicesApi/api';


const FavoritesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState();
  const [limit, setLimit] = useState();
  const [recipes, setRecipes] = useState([]);
    

      useEffect(() => {
        const fetchFavoriteRecipes = async () => {
        setIsLoading(true);
        const data = await fetchUserFavoriteRecipes(currentPage);

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

        fetchFavoriteRecipes();
  }, [currentPage]);

  const totalPages = Math.ceil(count / limit);

  const handleClickPaginationButton = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleClickDeleteButton = id => {
    deleteUserFavoriteRecipe(id);
    setRecipes(recipes.filter(recipe => recipe._id !== id));
  };
    

    return (
      
        <MyFavoriteContainer>
          <MainTitle text="Favorites" />
            
            {isLoading && <Loader />}

            {/* {recipes.length === 0 && !isLoading && !isError && (
                <H3> The list is empty... You don't have favorite recipes  </H3>
            )} */}
            

            {isError
                ? (<Error />)
                : (<RecipeListContainer>
                    <FavoriteRecipesList recipes={recipes} onClick={handleClickDeleteButton} />
                        {recipes?.length > 0    ? ( <Pagination
                                                    totalPages={totalPages}
                                                    currentPage={currentPage}
                                                    onClick={handleClickPaginationButton}
                                                    />)
                                                : (<H3> The list is empty... You don't have favorite recipes  </H3>)
                        
                        }
                    </RecipeListContainer>)
            } 
        </MyFavoriteContainer>
  )
};

export default FavoritesPage;


