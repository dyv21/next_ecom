import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export type ProductType = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  brand: string;
  rating: number;
  stock: number;
  images: [];
};

export type Nullable<T> = null | T;

export const useFetchProduct = (): Nullable<ProductType> => {
  const [product, setProduct] = useState<Nullable<ProductType>>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${router.query.id}`)
      .then((res) =>  setProduct(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return product;
};
