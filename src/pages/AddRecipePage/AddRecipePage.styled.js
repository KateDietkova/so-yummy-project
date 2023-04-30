import styled from 'styled-components';
import { Container } from '../../components/universalComponents/Container/Container.styled';

export const AddRecipeContainer = styled(Container)`
display: flex;
flex-direction: column;
  position: relative;
  background-color: ${props =>
    props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : props.theme.colors.textWhite};

   

      @media screen and (min-width: 1280px) {
        flex-direction: row;
              }
`;

export const FlexWrapper = styled.div`
 display:block
`;

export const SideFlexWrapper = styled(FlexWrapper)`

@media screen and (min-width: 768px) {

}


@media screen and (min-width: 1280px) {
 margin-left: 106px;
 padding-top: 144px;
}

`;