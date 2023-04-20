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
//     const response = await instance.get(`recipes/category/${categoryName}`);
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
