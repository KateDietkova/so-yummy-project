
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
// export const getAllIngredientsAPI = async () => {
//   const { data } = await axios.get(`/ingredients/list`);
//   return data;
// };
export const getAllIngredientsAPI = async () => {
  const { data } = await axios.get(`/ingredients/list`)
    return data.data;
  };

export const getFavorite = async () => {
  try {
      const response = await axios.get(`/favorite`);
      return response.data.data;
    } catch (error) {
      console.log(error.message);
    }
  }

// import axios from 'axios';

// export const instance = axios.create({
//   baseURL: 'https://so-yummy-api.herokuapp.com/api/',
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDI5YjBmNDczMjk5NmVkYTk3OTAiLCJpYXQiOjE2ODE3MjA3NTUsImV4cCI6MTY4MjkzMDM1NX0.DoC-PApp9KBbMKIbvZVnDvnYAkQ6zbBx1EjUTbSYjvU',
//   },
// });

// export const getRecipesByCategory = async categoryName => {
//   try {
//     const response = await instance.get(recipes/category/${categoryName});
//     console.log(response.data.data.recipes);
//     return response.data.data.recipes;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getCategoriesList = async () => {
//   try {
//     const response = await instance.get('recipes/category-list');
//     return response.data.categories;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// axios.defaults.baseURL = 'https://so-yummy-api.herokuapp.com/api'

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

