import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Container } from "components/universalComponents/Container/Container.styled";
import { MainTitle } from "components/universalComponents/MainTitle/MainTitle";
import { CategoriesTabs } from "./CategoriesTabs/CategoriesTabs";
import {RecipesList} from "components/universalComponents/RecipesList/RecipesList";
// import { useDispatch, useSelector } from "react-redux";
import {getRecipesByCategory, getCategoriesList} from '../../servicesApi/api'


const instance = axios.create({
  baseURL: 'https://so-yummy-api.herokuapp.com/api/',
  headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDI5YjBmNDczMjk5NmVkYTk3OTAiLCJpYXQiOjE2ODE3MjA3NTUsImV4cCI6MTY4MjkzMDM1NX0.DoC-PApp9KBbMKIbvZVnDvnYAkQ6zbBx1EjUTbSYjvU'}
});

const CategoriesPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { categoryName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const login = async (data) => {
      try {
        const { data: result } = await instance.post('/auth/login', data)
         instance.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDI5YjBmNDczMjk5NmVkYTk3OTAiLCJpYXQiOjE2ODE3MjA3NTUsImV4cCI6MTY4MjkzMDM1NX0.DoC-PApp9KBbMKIbvZVnDvnYAkQ6zbBx1EjUTbSYjvU`;
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
        setCategories(response)
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
        const {data} = await getRecipesByCategory(categoryName)
        setRecipes(data.recipes)
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
  }
}
fetchRecipes()
  }, [categoryName])

const goBack = () => navigate (-1)
  return (
    <Container>
    <MainTitle text="Categories"/>
    {<CategoriesTabs items={categories} />}
    {!isLoading && recipes.length > 0 && <RecipesList items={recipes} />}
    {error && <p>Sorry, something went wrong, please try again...</p>}
    <button onClick={goBack}>Go back</button>
    </Container>
  )
};

export default CategoriesPage;
// export const selectCategories = (state) => state.categories;
// export const selectRecipes = (state) => state.recipesByCategory;

// Redux for categories(Tabs)
  // const categories = useSelector(selectCategories)
//   const dispatch = useDispatch()
  
//   useEffect(() => {
//   dispatch(getCategoriesList())
// }, [dispatch])

  //Redux for recipesList
//   const recipes = useSelector(selectRecipesByCategory)
//   const dispatch = useDispatch()

//   useEffect(() => {
//   dispatch(getRecipesByCategory({categoryName}))
// }, [dispatch])