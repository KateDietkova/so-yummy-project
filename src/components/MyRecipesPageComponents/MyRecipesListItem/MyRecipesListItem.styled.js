// import styled from 'styled-components';
// import { LinkSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';

// import { ReactComponent as DeleteIcon } from '../../../assets/svg/other/trash-icon.svg';

// export const RecipeCardWrapper = styled.li`
//   display: flex;
//   gap: 14px;
//   padding: 14px 9px;
//   width: 100%;
//   height: 152px;
//   border-radius: 8px;
//   background-color: ${props => {
//     return props.theme.darkTheme ? props.theme.colors.bgBlackLight : '#FFFFFF';
//   }};

//   @media screen and (min-width: 768px) {
//     padding: 28px 24px;
//     height: 232px;
//     gap: 24px;
//   }

//   @media screen and (min-width: 1280px) {
//     height: 404px;
//     padding: 40px;
//     gap: 54px;
//   }
// `;

// export const InfoCardWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// export const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// export const RecipeTitle = styled.h2`
//   margin-bottom: 14px;
//   max-width: 149px;
//   font-family: PoppinsMedium;
//   font-weight: ${props => props.theme.fontWeights.medium};
//   font-size: ${props => props.theme.fontSizes.s};
//   line-height: 1;
//   letter-spacing: -0.24px;
//   color: ${props => {
//     return props.theme.darkTheme ? props.theme.colors.textWhite : '#3e4462';
//   }};
//   @media screen and (min-width: 768px) {
//     margin-bottom: 28px;
//     max-width: 345px;
//     font-size: ${props => props.theme.fontSizes.xl};
//   }
//   @media screen and (min-width: 1280px) {
//     max-width: 735px;
//     margin-bottom: 40px;
//   }
// `;

// export const StyledDescription = styled.p`
//   /* display: block; */
//   /* width: 213px; */
//   /* height: 56px; */
//   /* overflow: hidden; */
//   font-family: PoppinsRegular;
//   font-weight: ${props => props.theme.fontWeights.normal};
//   font-size: 8px;
//   line-height: 1.25;
//   letter-spacing: -0.02em;

//   color: ${props => {
//     return props.theme.darkTheme
//       ? 'rgba(250, 250, 250, 0.6)'
//       : props.theme.colors.textDark;
//   }};

//   @media screen and (min-width: 768px) {
//     font-size: ${props => props.theme.fontSizes.s};
//     line-height: 1.29;
//   }

//   @media screen and (min-width: 1280px) {
//     font-size: ${props => props.theme.fontSizes.l};
//     line-height: 1.33;
//   }
// `;

// export const TimeLinkWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
// `;

// export const StyledPicture = styled.img`
//   width: 124px;
//   height: 100%;
//   border-radius: 8px;

//   @media screen and (min-width: 768px) {
//     width: 228px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 318px;
//   }
// `;

// export const DeleteButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 24px;
//   height: 24px;
//   padding: 0;
//   border: none;
//   border-radius: 4px;

//   background-color: ${props => {
//     if (props.type === 'my') {
//       return props.theme.darkTheme
//         ? props.theme.colors.bgdarkTheme
//         : props.theme.colors.accent;
//     }
//     return props.theme.darkTheme
//       ? props.theme.colors.bgdarkTheme
//       : props.theme.colors.bgLightGreen;
//   }};

//   @media screen and (min-width: 768px) {
//     width: 38px;
//     height: 38px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 44px;
//     height: 44px;
//   }
// `;

// export const StyledDeleteIcon = styled(DeleteIcon)`
//   position: absolute;
//   top: 50%;
//   right: 50%;
//   transform: translate(50%, -50%);
//   width: 14px;
//   height: 14px;

//   stroke: ${props => {
//     if (props.type === 'favorite') {
//       return props.theme.darkTheme
//         ? props.theme.colors.textWhite
//         : props.theme.colors.bgBlackDark;
//     }
//     return props.theme.colors.textWhite;
//   }};

//   @media screen and (min-width: 768px) {
//     width: 22px;
//     height: 22px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 24px;
//     height: 24px;
//   }
// `;

// export const StyledTimeText = styled.p`
//   font-family: PoppinsMedium;
//   font-weight: ${props => props.theme.fontWeights.medium};
//   font-size: 10px;
//   line-height: 1.4;
//   letter-spacing: -0.24px;

//   color: ${props => {
//     return props.theme.darkTheme ? props.theme.colors.textWhite : '#3e4462';
//   }};

//   @media screen and (min-width: 768px) {
//     font-size: ${props => props.theme.fontSizes.s};
//     line-height: 1.43;
//     letter-spacing: -0.24px;
//   }
// `;

// export const StyledLink = styled(LinkSkewStyled)`
//   width: 87px;
//   padding: 6px 14px;
//   font-size: 10px;

//   background-color: ${props => {
//     if (props.type === 'favorite') {
//       return props.theme.darkTheme
//         ? props.theme.colors.accent
//         : props.theme.colors.bgBlackDark;
//     }
//   }};

//   &:hover,
//   &:focus {
//     background-color: ${props => {
//       if (props.type === 'favorite') {
//         return props.theme.darkTheme
//           ? props.theme.colors.bgBlackDark
//           : props.theme.colors.accent;
//       }
//     }};
//   }

//   @media screen and (min-width: 768px) {
//     width: 138px;
//     padding: 12px 32px;
//     font-size: ${props => props.theme.fontSizes.s};
//   }
//   @media screen and (min-width: 1280px) {
//     width: 172px;
//     padding: 18px 44px;
//     font-size: ${props => props.theme.fontSizes.m};
//   }
// `;
