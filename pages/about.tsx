import styled from '@emotion/styled';
import PageHeader from '../components/pages/PageHeader';
import { NextPageWithLayout } from './_app';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1024px;
  padding: 96px 0 60px;
  margin: 0 auto;
`;

const About: NextPageWithLayout = () => {
  return (
    <div>
      <PageHeader
        title="About"
        description="안녕하세요. 프론트엔드 개발자 홍승아입니다."
      />
      About Page
    </div>
  );
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Container>{page}</Container>;
};

export default About;
