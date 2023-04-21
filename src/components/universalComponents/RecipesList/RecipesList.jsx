import { RecipeList } from './RecipesList.styled';
import { RecipeCard } from '../RecipeCard/RecipeCard';

export const RecipesList = ({ recipes, type, onClick }) => {
  return (
    <RecipeList>
      {recipes?.map(({ _id, preview, title, description, time }) => (
        <RecipeCard
          key={_id.$oid}
          preview={preview}
          title={title}
          description={description}
          time={time}
          _id={_id}
          type={type}
          onClick={onClick}
        />
      ))}
    </RecipeList>
  );
};
