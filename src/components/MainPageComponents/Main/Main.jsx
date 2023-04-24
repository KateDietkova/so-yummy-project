import { Container } from 'components/universalComponents/Container/Container.styled';
import { ChooseYourBreakfast } from 'components/MainPageComponents/ChooseYourBreakfast/ChooseYourBreakfast';
import {
  MainSection,
  MainTitle,
  MainTitleAccent,
  MainDesc,
  LeavesBgContainer,
  MainImgContainer,
  TailIcon,
  ArrowIcon,
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
        <MainImgContainer>
          <ChooseYourBreakfast />
          <TailIcon />
          <ArrowIcon />
        </MainImgContainer>
      </Container>
    </MainSection>
  );
};
