import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import SocialLink from './SocialLink';

const Container = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px 40px;
  grid-gap: 8px;
  margin-top: 36px;
`;

const Social: FunctionComponent = () => {
  return (
    <Container>
      <SocialLink
        link={{
          href: 'tel:010-7118-2519',
          title: '핸드폰번호',
        }}
        image={{
          src: '/mobile.svg',
          alt: 'mobile icon',
          width: 32,
          height: 32,
        }}
      />
      <SocialLink
        link={{
          href: 'https://github.com/seungahhong',
          title: 'github',
        }}
        image={{
          src: '/github.svg',
          alt: 'github icon',
          width: 40,
          height: 40,
        }}
      />
      <SocialLink
        link={{
          href: 'https://material-debt-c1c.notion.site/daa60481e37840ea9e1b7e1b12269942',
          title: 'notion',
        }}
        image={{
          src: '/notion.svg',
          alt: 'notion icon',
          width: 30,
          height: 30,
        }}
      />
      <SocialLink
        link={{
          href: 'https://www.linkedin.com/in/seungahhong/',
          title: 'linkedin',
        }}
        image={{
          src: '/linkedin.svg',
          alt: 'linkedin icon',
          width: 38,
          height: 38,
        }}
      />
    </Container>
  );
};

export default Social;
