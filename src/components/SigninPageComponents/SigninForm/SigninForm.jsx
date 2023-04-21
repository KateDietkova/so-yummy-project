import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import {
  FormWrapper,
  FormStyled,
  LabelStyled,
  FieldStyled,
  FieldsWrapper,
  EmailIcon,
  PasswordIcon,
  SubmitBtn,
} from '../../RegisterPageComponents/RegisterForm/RegisterForm.styled';

import { SigninTitle, LinkRegisterStyled } from './SigninForm.styled';
import { signinSchema, ValidMassege } from './validationSignin';
import { login } from 'redux/auth/authOperations';
const initialValue = {
  email: '',
  password: '',
};

export const SigninForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(login(value));
    setIsSubmit(false);
    resetForm();
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValue}
        validationSchema={signinSchema}
        onSubmit={handleSubmit}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <FormStyled noValidate>
            <SigninTitle>Sign In</SigninTitle>
            <FieldsWrapper>
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
              Sign in
            </SubmitBtn>
          </FormStyled>
        )}
      </Formik>

      <LinkRegisterStyled to={'/register'}>Registration</LinkRegisterStyled>
    </FormWrapper>
  );
};
