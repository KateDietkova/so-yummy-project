import { Container } from 'components/universalComponents/Container/Container.styled';
import {
  MainSection,
  MainTitle,
  MainTitleAccent,
  MainDesc,
  LeavesBgContainer,
  MainImgContainer,
} from './Main.styled';
import { Search } from '../Search/Search';
import { PreviewCategories } from '../PreviewCategories/PreviewCategories';

export const Main = () => {
  return (
    <MainSection>
      <Container>
        <LeavesBgContainer></LeavesBgContainer>
        <MainTitle>
          <MainTitleAccent>So</MainTitleAccent>Yummy
        </MainTitle>
        <MainDesc>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </MainDesc>
        <Search />
        <PreviewCategories />
        <MainImgContainer></MainImgContainer>
      </Container>
    </MainSection>
  );
};
