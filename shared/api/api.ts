import { instance } from "@/shared/api/instance";
import { ProductThumbType } from "@/hooks/useFetchGoods";
import { AxiosResponse } from "axios";

export const API = {
  getProducts: (): Promise<AxiosResponse<{ products: ProductThumbType[] }>> =>
    instance.get("/products"),

  getSingleProduct: (id: string): Promise<AxiosResponse<ProductThumbType>> =>
    instance.get(`/products/${id}`),

  getCategories: (): Promise<AxiosResponse<string[]>> =>
    instance.get("/products/category-list"),
};
