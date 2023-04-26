import axios from 'axios';

import axios from 'axios';


axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api'

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/${id}`)
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyOTY2MmNmY2NlNzNhNjg4NzUzZTIiLCJpYXQiOjE2ODIwODY5NTEsImV4cCI6MTY4MzI5NjU1MX0.FfXjqrQvxNQ651VJkFnH2MbyotCAahhsVUfiKRW7zec`,
      // },
    console.log(data.data)
    return data.data.recipes;
  } catch (error) {
    console.log(error.message)
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
  }
