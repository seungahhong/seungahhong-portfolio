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

const Contact: NextPageWithLayout = () => {
  return (
    <div>
      <PageHeader title="Contact" />
      Contact Page
    </div>
  );
};

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return <Container>{page}</Container>;
};

export default Contact;
