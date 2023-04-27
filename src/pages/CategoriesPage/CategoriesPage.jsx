// import { useNavigate } from "react-router-dom";
import { MainTitle } from "components/universalComponents/MainTitle/MainTitle";
import { CategoriesTabs } from "./CategoriesTabs/CategoriesTabs";
import { CategoriesRecipesList } from "components/CategoriesPageComponents/CategoriesMenuList/CategoriesRecipesList";
import { CategoriesWrapper, CategoriesPageContainer } from "./CategoriesPage.styled";



const CategoriesPage = () => {
  // const navigate = useNavigate();
// const goBack = () => navigate (-1)

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
