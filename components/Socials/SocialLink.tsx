import { FunctionComponent } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

interface ISocialLinkProps {
  link: {
    href: string;
    title: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const Container = styled.a`
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

const SocialLink: FunctionComponent<ISocialLinkProps> = ({
  link: { href, title },
  image: { src, alt, width, height },
}) => {
  return (
    <Container
      href={href}
      rel="noopener noreferrer"
      title={title}
      target="_blank"
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </Container>
  );
};

export default SocialLink;
