import {
  MainDescRecipes,
  RecipesBtn,
  TextDescRecipes,
  DescRecipeAccent,
  ArrowStyled,
} from '../ChooseYourBreakfast/ChooseYourBreakfast.styled';

export const ChooseYourBreakfast = () => {
  return (
    <>
      <MainDescRecipes>
        <TextDescRecipes>
          <DescRecipeAccent>Delicious and healthy</DescRecipeAccent> way to
          enjoy a variety of fresh ingredients in one satisfying meal
        </TextDescRecipes>
        <RecipesBtn to="categories/breakfast">
          See recipes
          <ArrowStyled />
        </RecipesBtn>
      </MainDescRecipes>
    </>
  );
};
