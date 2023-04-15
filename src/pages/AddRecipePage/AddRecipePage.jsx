import { AddRecipeForm } from 'components/AddRecipePageComponents/AddRecipeForm/AddRecipeForm';
import { MainTitle } from '../../components/universalComponents/MainTitle/MainTitle';
import { Container } from '../../components/universalComponents/Container/Container.styled';

const AddRecipePage = () => {
  return (
    <Container>
      <MainTitle text="Add recipe" />
      <AddRecipeForm />
    </Container>
  );
};

export default AddRecipePage;
