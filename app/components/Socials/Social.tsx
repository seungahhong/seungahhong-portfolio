import { FunctionComponent } from 'react';

import SocialLink from './SocialLink';

const Social: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-[40px_40px_40px_40px] gap-[8px] mt-[36px]">
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
    </div>
  );
};

export default Social;
