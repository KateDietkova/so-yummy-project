// import { getHoursFromMins } from 'helpers/helper';
// import {
//   DeleteButton,
//   InfoCardWrapper,
//   RecipeCardWrapper,
//   RecipeTitle,
//   StyledDeleteIcon,
//   StyledDescription,
//   StyledLink,
//   StyledPicture,
//   StyledTimeText,
//   TextWrapper,
//   TimeLinkWrapper,
// } from './MyRecipesListItem.styled';

// export const MyRecipesListItem = ({
//   preview,
//   title,
//   description,
//   time,
//   _id,
// }) => {
//   const timeInHours = getHoursFromMins(time);
//   const handleDeleteButton = () => {};
//   const typePage = 'my';
//   // const typePage = 'favorite';
//   return (
//     <RecipeCardWrapper>
//       <StyledPicture src={preview} alt="recipe" loading="lazy" />
//       <InfoCardWrapper>
//         <DeleteButton type={typePage} onClick={handleDeleteButton}>
//           <StyledDeleteIcon type={typePage} />
//         </DeleteButton>
//         <TextWrapper>
//           <RecipeTitle>{title}</RecipeTitle>
//           {description && <StyledDescription>{description}</StyledDescription>}
//         </TextWrapper>
//         <TimeLinkWrapper>
//           <StyledTimeText>
//             {time > 60 ? timeInHours : time + ' min'}
//           </StyledTimeText>
//           <StyledLink type={typePage} to="recipe/{_id.$oid}">
//             <div className="inner">See recipe</div>
//           </StyledLink>
//         </TimeLinkWrapper>
//       </InfoCardWrapper>
//     </RecipeCardWrapper>
//   );
// };
