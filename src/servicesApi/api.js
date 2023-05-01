import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api-jvk2.onrender.com/api';

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
    return error;
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

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/${id}`);
    return data.data.recipes;
  } catch (error) {
    return error.message;
  }
};
export const getAllIngredientsAPI = async () => {
  const { data } = await axios.get(`/ingredients/list`);
  return data;
};

export const getFavorite = async () => {
  try {
    const response = await axios.get(`/favorite`);
    return response.data.data;
  } catch (error) {
    return error.message;
  }
};


export const fetchUserFavoriteRecipes = async currentPage => {
  try {
    const { data } = await axios.get(`/favorite?page=${currentPage}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteUserFavoriteRecipe = async id => {
  try {
    const { data } = await axios.patch(`/favorite/${id}`);
    return data.data;
  } catch (error) {
    return error;
  }
};

export const addToFavorite = async id => {
  try {
    const { data } = await axios.patch(`/favorite/${id}`);
    return data.data;
  } catch (error) {
    return error.message;
  }
};
