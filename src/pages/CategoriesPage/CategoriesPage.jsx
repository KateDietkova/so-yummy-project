// import { useNavigate } from "react-router-dom";
import { Container } from "components/universalComponents/Container/Container.styled";
import { MainTitle } from "components/universalComponents/MainTitle/MainTitle";
import { CategoriesTabs } from "./CategoriesTabs/CategoriesTabs";
import { CategoriesRecipesList } from "components/CategoriesPageComponents/CategoriesMenuList/CategoriesRecipesList";



const CategoriesPage = () => {
  // const navigate = useNavigate();
// const goBack = () => navigate (-1)

  return (
    <Container>
    <MainTitle text="Categories"/>
    <CategoriesTabs  />
    <CategoriesRecipesList />
    </Container>
  )
};

export default CategoriesPage;
