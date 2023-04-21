
import RecipePageHero  from "components/RecipePageComponents/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "components/RecipePageComponents/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "components/RecipePageComponents/RecipePreparation/RecipePreparation";
import {RecipeSection} from "./RecipePage.styled";
import { getRecipeById } from "servicesApi/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRecipe } from "redux/recipes/recipesSelectors";
// import { useDispatch } from 'react-redux';
const RecipePage = () => {
 const [isLoading, setIsLoading] = useState(false);
  // const { recipeId } = useParams();
  const [recipes, setRecipes] = useState([]);
  
//  const dispatch = useDispatch();
  useEffect(() => {
    const getRecipe = async () => {
    try {
      setIsLoading(true);
      const { data } = await getRecipeById(recipes);
      console.log(data)
  //     if (data) {
  //     return;
  // }
      setRecipes(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message)
      }
    }
      getRecipe();
  }, [recipes]);
  
  // useEffect(() => {
  //    const { recipe } =  getRecipeById(recipeId);
  //   dispatch(getRecipeById(recipe));
  // }, [dispatch, recipeId]);
  // console.log(recipes)
  
    const {
    title,
    description,
    favorites,
    time,
    instructions,
    thumb,
    ingredients,
  } = recipes
  
    
  
  
  return (
    <>
      <RecipePageHero
        title={title}
        description={description}
        favorites={favorites}
        time={time}
      />
      <RecipeIngredientsList ingredients={ingredients} /> <RecipeIngredientsList/>    
      <RecipePreparation instructions = { instructions } foto = { thumb }/>        
    </>
    
  )
};

export default RecipePage;
// ingredients={ingredients} 
// description = { instructions } foto = { thumb }