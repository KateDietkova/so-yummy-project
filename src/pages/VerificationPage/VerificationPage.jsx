import { Container } from 'components/universalComponents/Container/Container.styled';
import { VerifyTitle } from './VerificationPage.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verification } from 'redux/auth/authOperations';

export const VerificationPage = () => {
  const { vCode } = useParams();
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('userEmail'));

  useEffect(() => {
    dispatch(verification({ email, vCode }));
  }, [dispatch, email, vCode]);

  return (
    <Container>
      <VerifyTitle>Confirmed</VerifyTitle>
    </Container>
  );
};
