export interface ICardItemProps {
  href: string;
  image: {
    src: string;
    alt: string;
    objectFit: string;
  };
  title: string;
  description?: string;
  date?: string;
}
