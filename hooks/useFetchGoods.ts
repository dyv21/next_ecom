import { useEffect, useState } from "react";
import axios from "axios";

export type ProductThumbType = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

export type Nullable<T> = null | T;

export const useFetchGoods = () => {
  const [goodsList, setGoodsList] = useState<Nullable<ProductThumbType[]>>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<{ products: ProductThumbType[] }>(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
      .then((res) => setGoodsList(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { goodsList, loading: isLoading, error };
};