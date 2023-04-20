import {
  MainDescRecipes,
  RecipesBtn,
  TextDescRecipes,
  DescRecipeAccent,
} from '../ChooseYourBreakfast/ChooseYourBreakfast.styled';
import { ReactComponent as Icon } from '../../../assets/svg/other/Icon.svg';

export const ChooseYourBreakfast = () => {
  return (
    <>
      <MainDescRecipes>
        <TextDescRecipes>
          <DescRecipeAccent>Delicious and healthy</DescRecipeAccent> way to
          enjoy a variety of fresh ingredients in one satisfying meal
        </TextDescRecipes>
        <RecipesBtn to="categories/:breakfast">
          See recipes
          <Icon size={12} />
        </RecipesBtn>
      </MainDescRecipes>
    </>
  );
};
