import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container } from "components/universalComponents/Container/Container.styled";
import CategoriesTabs from "./CategoriesTabs/CategoriesTabs";
import RecipesList from "components/universalComponents/RecipesList/RecipesList";

// const getRecipesByCategory = async category => {
//   try {
//     const response = await axios.get(`recipes/category/${category}`);
//     return response.data.recipes;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const getCategoriesList = async () => {
//   try {
//     const response = await axios.get('recipes/category-list');
//     return response.data.categorys;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
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
        setCatogories(response.data)
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
    <h1>CategoriesPage</h1>;
    <CategoriesTabs items={categories} />
    {!isLoading && recipes.length > 0 && <RecipesList items={recipes} />}
    {error && <p>Sorry, something went wrong, please try again...</p>}
    <button onClick={goBack}>Go back</button>
    </Container>
  )
};

export default CategoriesPage;