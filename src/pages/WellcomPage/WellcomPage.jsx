import { AuthNav } from 'components/WellcomPageComponents/AuthNav/AuthNav';
import {
  WellcomeWrapper,
  SectionWellcome,
  LogoWrapper,
  LogoIconStyled,
  WellcomeTitle,
  WellcomeDesc,
  ContainerWellcomeStyled,
} from './WellcomPage.styled';



const WellcomPage = () => {
  return (
    <WellcomeWrapper>
      <SectionWellcome>
        <ContainerWellcomeStyled>
          <LogoWrapper>
            <LogoIconStyled />
          </LogoWrapper>
          <WellcomeTitle>Welcome to the app!</WellcomeTitle>
          <WellcomeDesc>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </WellcomeDesc>
          <AuthNav />
        </ContainerWellcomeStyled>
      </SectionWellcome>
    </WellcomeWrapper>
  );
};

export default WellcomPage;
