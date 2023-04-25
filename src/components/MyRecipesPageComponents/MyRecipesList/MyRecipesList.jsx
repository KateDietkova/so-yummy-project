import { RecipesList } from 'components/universalComponents/RecipesList/RecipesList';

export const MyRecipesList = ({ recipes, onClick }) => {
  return (
    <>
      <RecipesList recipes={recipes} type="my" onClick={onClick} />
    </>
  );
};
