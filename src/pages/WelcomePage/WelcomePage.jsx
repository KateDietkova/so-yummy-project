import { AuthNav } from 'components/WelcomePageComponents/AuthNav/AuthNav';
import {
  WelcomeWrapper,
  SectionWelcome,
  LogoWrapper,
  LogoIconStyled,
  WelcomeTitle,
  WelcomeDesc,
  ContainerWelcomeStyled,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <WelcomeWrapper>
      <SectionWelcome>
        <ContainerWelcomeStyled>
          <LogoWrapper>
            <LogoIconStyled />
          </LogoWrapper>
          <WelcomeTitle>Welcome to the app!</WelcomeTitle>
          <WelcomeDesc>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </WelcomeDesc>
          <AuthNav />
        </ContainerWelcomeStyled>
      </SectionWelcome>
    </WelcomeWrapper>
  );
};

export default WelcomePage;
