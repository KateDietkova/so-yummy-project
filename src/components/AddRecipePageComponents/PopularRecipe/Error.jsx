import {
  StyledErrorBox,
  StyledErrorWrapper,
  StyledTextError,
  StyledTextErrorBold,
} from './Error.styled';

export const Error = () => {
  return (
    <StyledErrorWrapper>
      <StyledTextErrorBold>We are sorry,</StyledTextErrorBold>
      <StyledTextError>there are no popular recipes now...</StyledTextError>
      <StyledErrorBox />
    </StyledErrorWrapper>
  );
};
