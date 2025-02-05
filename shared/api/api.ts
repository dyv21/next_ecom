import { instance } from "@/shared/api/instance";

export const API = {
  getGoods: () => {
    return instance.get("/products");
  },
};
