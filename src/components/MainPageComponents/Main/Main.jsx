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
        <MainImgContainer></MainImgContainer>
      </Container>
    </MainSection>
  );
};
