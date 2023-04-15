import { AddRecipeForm } from 'components/AddRecipePageComponents/AddRecipeForm/AddRecipeForm';
import { MainTitle } from '../../components/universalComponents/MainTitle/MainTitle';

const AddRecipePage = () => {
  return (
    <>
      <MainTitle text="Add recipe" />
      <AddRecipeForm />
    </>
  );
};

export default AddRecipePage;
