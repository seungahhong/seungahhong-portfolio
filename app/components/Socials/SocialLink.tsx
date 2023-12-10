import { FunctionComponent } from 'react';
import Image from 'next/image';

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

const SocialLink: FunctionComponent<ISocialLinkProps> = ({
  link: { href, title },
  image: { src, alt, width, height },
}) => {
  return (
    <a
      className="inline-flex items-center justify-center bg-[#ffffff] bg-opacity-70 text-[#161b21] w-[40px] h-[40px] min-w-[40px] text-[20px] border-none rounded-[50%]"
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </a>
  );
};

export default SocialLink;
