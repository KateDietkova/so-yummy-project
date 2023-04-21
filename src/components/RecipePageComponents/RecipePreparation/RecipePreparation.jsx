import {
    PreparationSection,
    Title,
    PrepeaRecipe,
  PrepeaRecipeImage,
  Steps,
    Step
} from './RecipePreparation.styled';

const RecipePreparation = ({instructions, thumb}) => {
  let steps = [];
  if (instructions) {
    if (!instructions.includes('\r\n')) {
      return;
    } else {
      steps = instructions.split('\n');
    }
  }

  return (
    <PreparationSection>
      
      <Title>Recipe Preparation</Title>
      <PrepeaRecipe>
      {steps.length > 0 ? (
       <Steps>
              {steps.length > 0 &&
                steps.map((step, idx) => (
                  <Step key={idx}>
                    <p>{step}</p>
                  </Step>
                ))}
            </Steps>
          ) : (
            instructions
          )}
      </PrepeaRecipe>
      <PrepeaRecipeImage img={thumb}></PrepeaRecipeImage>
    </PreparationSection>
  );
};

export default RecipePreparation;