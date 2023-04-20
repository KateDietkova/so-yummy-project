// import { useNavigate } from "react-router-dom";
import { Container } from "components/universalComponents/Container/Container.styled";
import { MainTitle } from "components/universalComponents/MainTitle/MainTitle";
import { CategoriesTabs } from "./CategoriesTabs/CategoriesTabs";
import { RecipesGallery } from "components/universalComponents/RecipesGallery/RecipesGallery";


const CategoriesPage = () => {
  // const navigate = useNavigate();
// const goBack = () => navigate (-1)

  return (
    <Container>
    <MainTitle text="Categories"/>
    <CategoriesTabs  />
    <RecipesGallery />
    </Container>
  )
};

export default CategoriesPage;
