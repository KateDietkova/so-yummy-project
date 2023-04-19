import {
  MainTitleStyled,
  DecorBoxLeft,
  DecorBoxCenter,
  DecorBoxRight,
  MainTitleBox,
} from './MainTitle.styled';

export const MainTitle = ({ text }) => {
  return (
    <MainTitleBox>
      <DecorBoxLeft />
      <DecorBoxCenter />
      <DecorBoxRight />
      <MainTitleStyled>{text}</MainTitleStyled>
    </MainTitleBox>
  );
};
