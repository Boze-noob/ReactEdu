import create from "zustand";
import { immer } from "zustand/middleware/immer";
import * as Categorys from "../types/enumerations/shopMenu";

export const useShoppeStore = create(
  immer(() => ({
    isLoading: true,
    selectedCategory: Categorys.ShopMenuEnum.SHOP_ALL,
  }))
);
