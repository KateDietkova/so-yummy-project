import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import {
  FormWrapper,
  FormStyled,
  LabelStyled,
  FieldStyled,
  FormTitle,
  FieldsWrapper,
  UserIcon,
  EmailIcon,
  PasswordIcon,
  SubmitBtn,
  LinkStyled,
} from './RegisterForm.styled';
import { signupSchema, ValidMassege } from './validationRegister';
import { register } from 'redux/auth/authOperations';

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    console.log('Register data', value);
    dispatch(register(value));
    setIsSubmit(false);
    // navigate('/');
    resetForm();

  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValue}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <FormStyled noValidate>
            <FormTitle>Registration</FormTitle>
            <FieldsWrapper>
              <LabelStyled htmlFor="name">
                <FieldStyled
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces."
                  required
                  pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
                  placeholder="Name"
                />
                <UserIcon />
                <ErrorMessage name="name" />
                {touched.name && !errors.name && isSubmit && <ValidMassege />}
              </LabelStyled>
              <LabelStyled htmlFor="email">
                <FieldStyled
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <EmailIcon />
                <ErrorMessage name="email" />
                {touched.email && !errors.email && isSubmit && <ValidMassege />}
              </LabelStyled>
              <LabelStyled htmlFor="password">
                <FieldStyled
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <PasswordIcon />
                <ErrorMessage name="password" />
                {touched.password && !errors.password && isSubmit && (
                  <ValidMassege>Password is secure</ValidMassege>
                )}
              </LabelStyled>
            </FieldsWrapper>

            <SubmitBtn type="submit" onClick={() => setIsSubmit(true)}>
              Sign up
            </SubmitBtn>
          </FormStyled>
        )}
      </Formik>

      <LinkStyled to={'/signin'}>Sign in</LinkStyled>
    </FormWrapper>
  );
};
