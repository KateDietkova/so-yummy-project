import {
    PreparationSection,
    Title,
    PrepeaRecipe,
    PrepeaRecipeImage,
    Steps,
    Step,
    ListItem,
    ListText
} from './RecipePreparation.styled';
import IngredientsPlaceholder from '../../../assets/images/desktop/mocks/recipe-photo-default-2x.jpg'
export const RecipePreparation = ({ instructions, preview }) => {
  
  
  console.log(instructions);
  return (
    <PreparationSection>
      <div >
      <Title>Recipe Preparation</Title>
        <PrepeaRecipe>
          {instructions && 
            instructions.replace('.').split('. ').map((text, i) => {
              const isDropEnd = text[text.length - 1] === ".";
              console.log(isDropEnd);
              const textUpdate = isDropEnd ? text : text.slice(0,text.length - 1)
              console.log('text', text);
              console.log('text.slice', text.slice(0,text.length - 1));
              return (
                <ListItem key={i} >
                  <Step>
                  <Steps>{i + 1}</Steps>
                  </Step>
                 <ListText>{textUpdate}</ListText> 
                </ListItem>
              )
            })}
          </PrepeaRecipe>
      </div>  
      <PrepeaRecipeImage
        src={preview ? preview : IngredientsPlaceholder}
      />
       
    </PreparationSection>
  );
};

