import { useRef, useState } from 'react';
import { Formik } from 'formik';
import {
  FormStyled,
  UserPhotoWrapper,
  UploadBtn,
  FieldStyled,
  LabelStyled,
  EditIcon,
  UserIcon,
  SaveChangeBtn,
} from './UserInfoForm.styled';
import { PreviewPhoto } from './PreviewPhoto/PreviewPhoto';
import { FiUser } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';

export const UserInfoForm = ({ closeModal }) => {
  const userName = 'Olena';
  const userPhoto = null;
  const [photoRef, setPhotoRef] = useState(userPhoto);
  const initialValue = { name: userName, photo: photoRef };

  const fileRef = useRef(null);

  const handleSubmit = (value, { resetForm }) => {
    console.log('UserInfoSubmit', value);
    resetForm();
    closeModal();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <FormStyled>
          <LabelStyled htmlFor="photo" className="photo">
            <input
              ref={fileRef}
              hidden
              type="file"
              name="photo"
              onChange={e => {
                setFieldValue('photo', e.target.files[0]);
                setPhotoRef(e.target.files[0]);
              }}
            />

            <UserPhotoWrapper>
              {values.photo ? (
                <PreviewPhoto photo={values.photo} />
              ) : (
                <FiUser size={47} color={'#C4C4C4'} />
              )}
              <UploadBtn
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                <IoAdd size={20} color={'#FAFAFA'} />
              </UploadBtn>
            </UserPhotoWrapper>
          </LabelStyled>
          <LabelStyled htmlFor="name" className="nameLabel">
            <FieldStyled
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
            />
            <UserIcon size={24} />
            <EditIcon size={19} />
          </LabelStyled>

          <SaveChangeBtn type="submit">Save Changes</SaveChangeBtn>
        </FormStyled>
      )}
    </Formik>
  );
};
