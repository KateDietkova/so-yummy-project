import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Container } from "components/universalComponents/Container/Container.styled";
import CategoriesTabs from "./CategoriesTabs/CategoriesTabs";
import RecipesList from "components/universalComponents/RecipesList/RecipesList";
import { useDispatch, useSelector } from "react-redux";


// import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL: "https://so-yummy-api.herokuapp.com/api/"
})
// export const selectCategories = (state) => state.categories;
// export const selectRecipes = (state) => state.recipes;

// export const getCategoriesList = createAsyncThunk(
//   "categories/getCategoriesList",
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get("/recipes/category-list");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const getRecipesByCategory = createAsyncThunk(
//   "categories/getRecipesByCategory",
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
const [token, setToken] = useState(null)

  const [recipes, setRecipes] = useState([]);
  const [categories, setCatogories] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    const { category } = useParams();
  const navigate = useNavigate();
// Redux for categories(Tabs)
  // const categories = useSelector(selectCategories)
//   const dispatch = useDispatch()
  
//   useEffect(() => {
//   dispatch(getCategoriesList())
// }, [dispatch])

  //Redux for recipesList
//   const recipes = useSelector(selectRecipes)
//   const dispatch = useDispatch()

//   useEffect(() => {
//   dispatch(getRecipesByCategory({category}))
// }, [dispatch])

  useEffect(() => {
    const login = async (data) => {
      try {
        const { data: result } = await instance.post('/auth/login', data)
         instance.defaults.headers.common.Authorization = `Bearer ${result.token}`;
        return result;
      } catch (error) {
        console.log(error.message)
      }
  }
login()
}, [])

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
    {token && <CategoriesTabs items={categories} />}
    {!isLoading && recipes.length > 0 && <RecipesList items={recipes} />}
    {error && <p>Sorry, something went wrong, please try again...</p>}
    <button onClick={goBack}>Go back</button>
    </Container>
  )
};

export default CategoriesPage;