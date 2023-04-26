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
      <StyledTextError>something went wrong, try later...</StyledTextError>
      <StyledErrorBox />
    </StyledErrorWrapper>
  );
};
