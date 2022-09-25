import { FunctionComponent } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px 40px;
  grid-gap: 8px;
  margin-top: 36px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  color: #161b21;
  width: 40px;
  height: 40px;
  min-width: 40px;
  font-size: 20px;
  border: none;
  border-radius: 50%;
`;

const Social: FunctionComponent = () => {
  return (
    <Container>
      <SocialLink
        href="https://github.com/seungahhong"
        rel="noopener noreferrer"
        title="github"
        target="_blank"
      >
        <Image src="/github.svg" alt="github icon" width={40} height={40} />
      </SocialLink>
      <SocialLink
        href="https://material-debt-c1c.notion.site/daa60481e37840ea9e1b7e1b12269942"
        rel="noopener noreferrer"
        title="notion"
        target="_blank"
      >
        <Image src="/notion.svg" alt="notion icon" width={30} height={30} />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/seungahhong/"
        rel="noopener noreferrer"
        title="linkedin"
        target="_blank"
      >
        <Image src="/linkedin.svg" alt="linkedin icon" width={38} height={38} />
      </SocialLink>
      <SocialLink
        href="https://www.facebook.com/people/%ED%99%8D%EC%8A%B9%EC%95%84/100002349562000/"
        rel="noopener noreferrer"
        title="facebook"
        target="_blank"
      >
        <Image src="/facebook.svg" alt="facebook icon" width={32} height={32} />
      </SocialLink>
    </Container>
  );
};
export default Social;
