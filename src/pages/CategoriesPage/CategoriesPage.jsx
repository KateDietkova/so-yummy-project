
import { MainTitle } from "components/universalComponents/MainTitle/MainTitle";
import { CategoriesTabs } from "./CategoriesTabs/CategoriesTabs";
import { CategoriesRecipesList } from "components/CategoriesPageComponents/CategoriesMenuList/CategoriesRecipesList";
import { CategoriesWrapper, CategoriesPageContainer } from "./CategoriesPage.styled";



const CategoriesPage = () => {

  return (
    <CategoriesPageContainer>
      <CategoriesWrapper>
    <MainTitle text="Categories"/>
    <CategoriesTabs  />
        <CategoriesRecipesList />
        </CategoriesWrapper>
    </CategoriesPageContainer>
  )
};

export default CategoriesPage;
