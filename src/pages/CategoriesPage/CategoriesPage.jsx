import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Container } from "components/universalComponents/Container/Container.styled";
import CategoriesTabs from "./CategoriesTabs/CategoriesTabs";
import RecipesList from "components/universalComponents/RecipesList/RecipesList";


// import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL: "https://so-yummy-api.herokuapp.com/api/"
})
// export const selectCategories = (state) => state.categories;

// export const getCategories = createAsyncThunk(
//   "categories/getCategories",
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get("/recipes/category-list");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const getCategoryRecipes = createAsyncThunk(
//   "categories/getCategoryRecipes",
//   async ({ category }, thunkAPI) => {
//     try {
//       const response = await instance.get(
//         `/recipes/${category}`
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
const getRecipesByCategory = async category => {
  try {
    const response = await instance.get(`recipes/category/${category}`);
    return response.data.recipes;
  } catch (error) {
    console.log(error.message);
  }
};

const getCategoriesList = async () => {
  try {
    const response = await instance.get('recipes/category-list');
    return response.data.categorys;
  } catch (error) {
    console.log(error.message);
  }
};
const CategoriesPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [categories, setCatogories] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const response = await getCategoriesList()
        setCatogories(response)
      } catch (error) {
        console.log(error)
    }
    }
    fetchCategoriesList()
}, [])

  useEffect(() => {
    setIsLoading(true)
    const fetchRecipes = async () => {
      try {
        const response = await getRecipesByCategory(category)
        console.log(response)
        setRecipes(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
  }
}
fetchRecipes()
  }, [category])
const goBack = () => navigate (-1)
  return (
    <Container>
    <h1>CategoriesPage</h1>
    <CategoriesTabs items={categories} />
    {!isLoading && recipes.length > 0 && <RecipesList items={recipes} />}
    {error && <p>Sorry, something went wrong, please try again...</p>}
    <button onClick={goBack}>Go back</button>
    </Container>
  )
};

export default CategoriesPage;