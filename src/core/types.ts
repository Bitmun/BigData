export interface APIResponce<T> {
  data: { count: number; limit: number; offset: number; results: T };
}

export interface Comic {
  id: number;
  title: string;
  pageCount: string;
}

export interface Character {
  id: number;
  name: string;
  comics: {
    items: { name: string }[];
  };
}
