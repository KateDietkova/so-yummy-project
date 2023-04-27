import {
  NotFoundPageContainer,
  ColumBlock,
  NotFoundBgContainer,
  TextNotFound,
  TitleNotFound,
} from './NotFoundPage.styled';
import { MainTitle } from '../../components/universalComponents/MainTitle/MainTitle';

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <MainTitle />
      <ColumBlock>
        <NotFoundBgContainer />
        <TitleNotFound>We are sorry,</TitleNotFound>
        <TextNotFound>
          but the page you were looking for can’t be found..
        </TextNotFound>
      </ColumBlock>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
