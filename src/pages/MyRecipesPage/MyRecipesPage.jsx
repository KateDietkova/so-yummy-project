import { MainTitle } from 'components/universalComponents/MainTitle/MainTitle';
import { MyRecipesList } from 'components/MyRecipesPageComponents/MyRecipesList/MyRecipesList';
import { MyRecipeContainer } from './MyRecipesPage.styled';

const MyRecipesPage = () => {
  return (
    <MyRecipeContainer>
      <MainTitle text="My recipes" />
      <MyRecipesList />
    </MyRecipeContainer>
  );
};

export default MyRecipesPage;
