import axios from 'axios';

export const getRecipesByQuery = async ({
  query,
  searchType,
  page,
  recipesPerPage,
}) => {
  try {
    if (searchType === 'ingredient') {
      const response = await axios.get(
        `/ingredients/?ingredient=${query}&page=${page}&limit=${recipesPerPage}`
      );
      return response.data;
    } else if (searchType === 'title') {
      const response = await axios.get(
        `/search?title=${query}&page=${page}&limit=${recipesPerPage}`
      );
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
