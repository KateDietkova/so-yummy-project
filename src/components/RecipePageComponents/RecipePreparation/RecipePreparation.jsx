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

  let step = 0;
  console.log(instructions);
  return (
    <PreparationSection>
      <div>
        <Title>Recipe Preparation</Title>
        <PrepeaRecipe>
          {instructions &&
            instructions.replace(/(\n\s*\n|\n)/g, "").split('.').map((text, i) => {
              console.log("instructions.split('.')", instructions.split('.'));
              if (text === '' || text.length < 5) {
                return null;
              }
              console.log('text', text);
              step += 1;
              return (
                <ListItem key={i}>
                  <Step>
                    <Steps>{step}</Steps>
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
