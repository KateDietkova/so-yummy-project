import { AddRecipeForm } from 'components/AddRecipePageComponents/AddRecipeForm/AddRecipeForm';
// import { MainTitle } from '../../components/universalComponents/MainTitle/MainTitle';
import { AddRecipeContainer } from './AddRecipePage.styled';

const AddRecipePage = () => {
  return (
    <AddRecipeContainer>
      {/* <MainTitle text="Add recipe" /> */}
      <AddRecipeForm />
    </AddRecipeContainer>
  );
};

export default AddRecipePage;
