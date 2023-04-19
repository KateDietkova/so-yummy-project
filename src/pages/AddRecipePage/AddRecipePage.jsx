import { AddRecipeContainer } from './AddRecipePage.styled';
import { MainTitle } from '../../components/universalComponents/MainTitle/MainTitle';
import { AddRecipeForm } from 'components/AddRecipePageComponents/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/AddRecipePageComponents/PopularRecipe/PopularRecipe';

const AddRecipePage = () => {
  return (
    <AddRecipeContainer>
      <MainTitle text="Add recipe" />
      <AddRecipeForm />
      <PopularRecipe />
    </AddRecipeContainer>
  );
};

export default AddRecipePage;
