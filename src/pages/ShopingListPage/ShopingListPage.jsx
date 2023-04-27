import { MainTitle } from "components/universalComponents/MainTitle/MainTitle"
import { Container } from "components/universalComponents/Container/Container.styled";

// import { IngredientsShoppingList } from "components/ShopingListPageComponents/IngredientsShoppingList/IngredientsShoppingList";
const ShopingListPage = () => {
  return (
  <Container>
      <MainTitle text="Shopping List" />
      {/* <IngredientsShoppingList /> */}
  </Container>
  )
};

export default ShopingListPage;