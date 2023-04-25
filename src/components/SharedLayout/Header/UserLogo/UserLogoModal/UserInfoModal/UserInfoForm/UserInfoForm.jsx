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
import { useAuth } from 'hooks/useAuth';
import { updateUserInfo } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const UserInfoForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const {
    user: { name, avatarUrl },
  } = useAuth();
  const [avatarFile, setAvatarFile] = useState(null);
  const initialValue = { name, image: avatarFile };

  const fileRef = useRef(null);

  const handleSubmit = ({ name }, { resetForm }) => {
    const formData = new FormData();
    formData.append('name', name);

    if (avatarFile) {
      formData.append('image', avatarFile);
    }

    dispatch(updateUserInfo(formData));
    resetForm();
    closeModal();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <FormStyled>
          <LabelStyled htmlFor="image" className="photo">
            <input
              ref={fileRef}
              hidden
              type="file"
              name="image"
              onChange={e => {
                setFieldValue('image', e.target.files[0]);
                setAvatarFile(e.target.files[0]);
              }}
            />

            <UserPhotoWrapper>
              {(values.image || avatarUrl) && (
                <PreviewPhoto photo={values.image} avatarUrl={avatarUrl} />
              )}

              {!values.image && !avatarUrl && (
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
