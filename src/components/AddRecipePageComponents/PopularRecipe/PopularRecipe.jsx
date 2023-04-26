import { Loader } from 'components/universalComponents/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchPopularRecipe } from 'servicesApi/api';

import { Error } from './Error';
import {
  StyledCard,
  StyledCardList,
  StyledInstructions,
  StyledNav,
  StyledPicture,
  StyledRecipeTitle,
  StyledSectionWrapper,
  StyledTitle,
  StyledWrapper,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPopularRecipe = async () => {
      setIsLoading(true);
      const data = await fetchPopularRecipe();

      if (data.name === 'AxiosError') {
        setIsError(true);
      }
      setPopularRecipes(data);
      setIsLoading(false);
    };

    getPopularRecipe();
  }, []);

  return (
    <StyledSectionWrapper>
      <StyledTitle>Popular recipe</StyledTitle>
      {isError ? (
        <Error />
      ) : (
        <StyledCardList>
          {popularRecipes.length > 0 &&
            popularRecipes.map(({ _id, preview, title, instructions }) => {
              return (
                <StyledWrapper key={_id}>
                  <StyledNav to={`/recipe/${_id}`}>
                    <StyledCard>
                      <StyledPicture
                        src={preview}
                        alt="recipe"
                        loading="lazy"
                      />
                      <div>
                        <StyledRecipeTitle>{title}</StyledRecipeTitle>
                        <StyledInstructions>{instructions}</StyledInstructions>
                      </div>
                    </StyledCard>
                  </StyledNav>
                </StyledWrapper>
              );
            })}
        </StyledCardList>
      )}

      {isLoading && <Loader />}
    </StyledSectionWrapper>
  );
};
