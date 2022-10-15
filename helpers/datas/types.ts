export interface IProjectDatas {
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

export interface IProjectType {
  [key: string]: IProjectDatas[];
}
