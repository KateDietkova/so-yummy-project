import axios from 'axios';

export const fetchUserRecipes = async currentPage => {
  try {
    const { data } = await axios.get(`/ownRecipes?page=${currentPage}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteUserRecipe = async id => {
  try {
    const { data } = await axios.delete(`/ownRecipes/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPopularRecipe = async () => {
  try {
    const { data } = await axios.get('/popular-recipe');
    return data.data;
  } catch (error) {
    return error;
  }
};
