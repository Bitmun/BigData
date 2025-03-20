export interface APIResponce<T> {
  data: { count: number; limit: number; offset: number; results: T };
}

export interface Comic {
  id: number;
  title: string;
  pageCount: string;
  prices: { price: number }[];
  images: { path: string; extension: string }[];
}

export interface Character {
  id: number;
  name: string;
  comics: {
    items: { name: string }[];
  };
  thumbnail: {
    extension: string;
    path: string;
  };
}
