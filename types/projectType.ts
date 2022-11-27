export interface IProjectCategory {
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

export interface IProjectCategoryType {
  [key: string]: IProjectCategory[];
}

export interface IProjectItem {
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

export interface IProjectItemType {
  [key: string]: IProjectItem[];
}
