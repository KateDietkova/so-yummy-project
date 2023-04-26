import {
    PreparationSection,
    Title,
    PrepeaRecipe,
    PrepeaRecipeImage,
    Steps,
    Step,
  Image,
  ListItem,
    ListText
} from './RecipePreparation.styled';
import IngredientsPlaceholder from '../../../assets/images/desktop/mocks/recipe-photo-default-2x.jpg'
export const RecipePreparation = ({instructions, thumb}) => {
  // let steps = [];
  // if (instructions) {
  //   if (!instructions.includes('\r\n')) {
  //     return;
  //   } else {
  //     steps = instructions.split('\n');
  //   }
  // }

  return (
    <PreparationSection>
      <div >
      <Title>Recipe Preparation</Title>
        <PrepeaRecipe>
          {instructions && 
            instructions.split('. ').map((text, i) => {
              return (
                <ListItem key={i} >
                  <Step>
                  <Steps>{i + 1}</Steps>
                  </Step>
                 <ListText>{text}</ListText> 
                </ListItem>
              )
            })}
          </PrepeaRecipe>
      </div>  
      
      <PrepeaRecipeImage
        src={thumb}
      />
       
    </PreparationSection>
  );
};

