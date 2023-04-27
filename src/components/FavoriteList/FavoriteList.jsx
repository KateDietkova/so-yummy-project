import { RecipesList } from 'components/universalComponents/RecipesList/RecipesList';

export const FavoriteRecipesList = ({ recipes, onClick }) => {
  return (
    <>
      <RecipesList recipes={recipes} type='favorite' onClick={onClick} />
    </>
  );
};