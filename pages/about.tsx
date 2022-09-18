import type { NextPage } from 'next';
import PageHeader from '../components/pages/PageHeader';

const About: NextPage = () => {
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

export default About;
