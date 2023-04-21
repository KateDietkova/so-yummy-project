import { Container } from 'components/universalComponents/Container/Container.styled';
import { VerifyTitle } from './VerificationPage.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verification } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

export const VerificationPage = () => {
  const dispatch = useDispatch();
  const { vCode } = useParams();
  const email = JSON.parse(localStorage.getItem('userEmail'));
  const { user } = useAuth();

  useEffect(() => {
    if (user.name) {
      return;
    }

    dispatch(verification({ email, vCode }));
  }, [dispatch, email, vCode, user.name]);

  return (
    <Container>
      <VerifyTitle>Confirmed</VerifyTitle>
    </Container>
  );
};
