import { instance } from "@/shared/api/instance";

export const API = {
  getGoods: () => instance.get("/products"),
  getSingleProduct: (id: string | string[] | undefined) =>
    instance.get(`/products/${id}`),
};
