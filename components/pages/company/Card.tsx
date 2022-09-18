import { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

interface IPageCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const Container = styled.div`
  will-change: transform;
  padding: 20px;
  overflow: hidden;
`;

const Inner = styled.div`
  border-radius: 16px;
  transform: translate(0);
  transition: all 0.2s;
  height: 100%;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 8px;

  &:hover {
    transform: translate(0, -10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const ImageLink = styled.a`
  position: relative;
  display: block;
  height: 0;
  padding-bottom: 70%;
  overflow: hidden;

  img {
    position: absolute;
    object-fit: contain;
  }
`;

const Card: FunctionComponent<IPageCardProps> = ({
  href,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Container>
      <Inner>
        <Link href={href}>
          <ImageLink>
            <Image src={imageSrc} alt={imageAlt} layout="fill" />
          </ImageLink>
        </Link>
      </Inner>
    </Container>
  );
};

export default Card;
