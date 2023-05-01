import {
  PreparationSection,
  Title,
  PrepeaRecipe,
  PrepeaRecipeImage,
  Steps,
  Step,
  ListItem,
  ListText,
} from './RecipePreparation.styled';
import IngredientsPlaceholder from '../../../assets/images/desktop/mocks/recipe-photo-default-2x.jpg';
export const RecipePreparation = ({ instructions, preview }) => {
  console.log(instructions);
  return (
    <PreparationSection>
      <div>
        <Title>Recipe Preparation</Title>
        <PrepeaRecipe>
          {instructions &&
            instructions.split('.').map((text, i) => {
              if (text === '') {
                return null;
              }
              return (
                <ListItem key={i}>
                  <Step>
                    <Steps>{i + 1}</Steps>
                  </Step>
                  <ListText>{text}</ListText>
                </ListItem>
              );
            })}
        </PrepeaRecipe>
      </div>
      <PrepeaRecipeImage src={preview ? preview : IngredientsPlaceholder} />
    </PreparationSection>
  );
};
