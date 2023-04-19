import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://so-yummy-api.herokuapp.com/api/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDI5YjBmNDczMjk5NmVkYTk3OTAiLCJpYXQiOjE2ODE3MjA3NTUsImV4cCI6MTY4MjkzMDM1NX0.DoC-PApp9KBbMKIbvZVnDvnYAkQ6zbBx1EjUTbSYjvU',
  },
});

export const getRecipesByCategory = async categoryName => {
  try {
    const response = await instance.get(`recipes/category/${categoryName}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCategoriesList = async () => {
  try {
    const response = await instance.get('recipes/category-list');
    return response.data.categorys;
  } catch (error) {
    console.log(error.message);
  }
};
