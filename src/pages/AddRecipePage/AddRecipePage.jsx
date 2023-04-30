import { AddRecipeContainer, FlexWrapper, SideFlexWrapper } from './AddRecipePage.styled';
import { MainTitle } from '../../components/universalComponents/MainTitle/MainTitle';
import { AddRecipeForm } from 'components/AddRecipePageComponents/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/AddRecipePageComponents/PopularRecipe/PopularRecipe';
import { FollowUsBlock } from 'components/AddRecipePageComponents/FollowUs/FollowUs';

const AddRecipePage = () => {
  return (
    <AddRecipeContainer>
      <FlexWrapper>
       <MainTitle text="Add recipe" />
      <AddRecipeForm />
      </FlexWrapper>
      <SideFlexWrapper>
        <FollowUsBlock />
        <PopularRecipe />
      </SideFlexWrapper>
    </AddRecipeContainer>
  );
};

export default AddRecipePage;
