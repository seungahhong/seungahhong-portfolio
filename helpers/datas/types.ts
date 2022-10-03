export interface IProjectType {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  descriptions: { [key: string]: string | string[] }[];
  date: string;
  link: {
    href: string;
    label: string;
  };
}
