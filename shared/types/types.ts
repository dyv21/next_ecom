export type ProductThumbType = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

export type ResponseType<T> = {
  products: ProductThumbType[];
};
