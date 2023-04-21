import { useNavigate } from 'react-router-dom';
import { ButtonSkew } from 'components/universalComponents/ButtonSkew/ButtonSkew';
import { ButtonSkewStyled } from 'components/universalComponents/ButtonSkew/ButtonSkew.styled';
import { getHoursFromMins } from 'helpers/helper';
import {
  DeleteButton,
  InfoCardWrapper,
  RecipeCardWrapper,
  RecipeTitle,
  StyledButton,
  StyledDescription,
  StyledPicture,
  StyledTimeText,
} from './MyRecipesListItem.styled';

export const MyRecipesListItem = ({ preview, title, description, time }) => {
  const timeInHours = getHoursFromMins(time);
  const navigate = useNavigate();
  const handleSeeRecipeButton = () => {
    navigate('/recipe/{_id}');
  };
  const handleDeleteButton = () => {};

  return (
    <RecipeCardWrapper>
      <StyledPicture src={preview} alt="recipe" loading="lazy" />
      <InfoCardWrapper>
        <DeleteButton onClick={handleDeleteButton} />
        <RecipeTitle>{title}</RecipeTitle>
        {description && <StyledDescription>{description}</StyledDescription>}
        <StyledTimeText>
          {time > 60 ? timeInHours : time + ' min'}
        </StyledTimeText>

        <StyledButton>
          {/* onClick={handleSeeRecipeButton}
          // color={color}
          // hoverColor={hoverColor}
          // width={width}
          // padding={padding}
          //children={} */}
          <div className="inner">See recipe</div>
        </StyledButton>
      </InfoCardWrapper>
    </RecipeCardWrapper>
  );
};
