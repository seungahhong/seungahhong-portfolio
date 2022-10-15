import styled from '@emotion/styled';
import { NextPageWithLayout } from './_app';
import PageHeader from '../components/pages/PageHeader';

const BackgroundWrapper = styled.div`
  background: url('/home_logo.jpeg') center center / cover no-repeat;
  width: 100%;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  padding: 96px 12px 60px;
  margin: 0 auto;
  height: 100%;
  word-break: keep-all;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
`;

const Description = styled.div`
  margin-top: 24px;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: #212529;
`;

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <Content>
        <Description>
          항상 도전하고 노력하며 공유하는 프론트엔드 개발자입니다.
        </Description>
      </Content>
    </Container>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <BackgroundWrapper>{page}</BackgroundWrapper>;
};

export default Home;
