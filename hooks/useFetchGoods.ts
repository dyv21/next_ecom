import { useEffect, useState } from "react";
import { API } from "@/shared/api/api";

export type ProductThumbType = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

export type Nullable<T> = null | T;

export const useFetchGoods = () => {
  const [goodsList, setGoodsList] =
    useState<Nullable<ProductThumbType[]>>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    API.getGoods()
      .then((res) => setGoodsList(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { goodsList, loading: isLoading, error };
};
