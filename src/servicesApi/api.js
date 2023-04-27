import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api';

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

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/${id}`);
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyOTY2MmNmY2NlNzNhNjg4NzUzZTIiLCJpYXQiOjE2ODIwODY5NTEsImV4cCI6MTY4MzI5NjU1MX0.FfXjqrQvxNQ651VJkFnH2MbyotCAahhsVUfiKRW7zec`,
    // },
    console.log(data.data);
    return data.data.recipes;
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllIngredientsAPI = async () => {
  const { data } = await axios.get(`/ingredients/list`);
  return data;
};
// export const getAllIngredientsAPI = async (_id) => {
//   const { data } = await axios.get(`/ingredients/?ingredient=${_id}`)
//     return data.data;
//   };

export const getFavorite = async () => {
  try {
    const response = await axios.get(`/favorite`);
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

// axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api'


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
    console.log(error);
  }
};

// export const getRecipeById = async (id) => {
//   try {
//     const { data } = await axios.get(`recipes/640cd5ac2d9fecf12e8898a6`, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYzE2MDViODU2Mjk2MDA4YzJjYjQiLCJpYXQiOjE2ODE4MzQ1MTMsImV4cCI6MTY4MzA0NDExM30.DbEC8Jzjm7qcBA8vhXnd-HZw_GkXGlV2AbdOM8_qsHc`,
//       },
//     });
//      return data;
//   } catch (error) {
//     console.log(error.message)
//   }
// };

