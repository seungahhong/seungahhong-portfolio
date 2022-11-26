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

export interface IWorkProjectDatas {
  title: string;
  date: string;
  images: {
    src: string;
    alt: string;
  }[];
  description: {
    'sub-discription': string;
    labels: {
      name: string;
      value: {
        type: string;
        data: string;
      };
    }[];
  };
}

export interface IWorkProjectType {
  [key: string]: IWorkProjectDatas[];
}
