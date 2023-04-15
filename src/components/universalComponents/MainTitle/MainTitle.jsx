import { MainTitleStyled } from './MainTitle.styled';
import { Container } from '../../../components/universalComponents/Container/Container.styled';

export const MainTitle = ({ text }) => {
  return (
    <Container>
      <MainTitleStyled>{text}</MainTitleStyled>
    </Container>
  );
};
