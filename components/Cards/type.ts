export interface ICardItemProps {
  href: string;
  image: {
    src: string;
    alt: string;
    objectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  };
  title: string;
  description?: string;
  date?: string;
}

export interface ICardBItemProps {
  className: string;
  date?: string;
  title: string;
  descriptions: React.ReactNode;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  link: {
    href: string;
    label: string;
  };
}
