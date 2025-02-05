import { instance } from "@/shared/api/instance";

export const API = {
  getGoods: () => instance.get("/products"),
  getSingleProduct: (id: string) => instance.get(`/products/${id}`),
};
