import { useState } from 'react';
import { UserImgContainer, UserImg } from './PreviewPhoto.styled';

export const PreviewPhoto = ({ photo }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(photo);
  reader.onload = () => setPreview(reader.result);
  return (
    <UserImgContainer>
      <UserImg src={preview} alt="preview" />
    </UserImgContainer>
  );
};
