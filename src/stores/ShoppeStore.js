import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { SHOPPE_LOAD_MORE_NUMBER } from "../data/constants/Articles";
import * as Categorys from "../types/enumerations/shopMenu";

export const useShoppeStore = create(
  immer(() => ({
    isLoading: true,
    selectedCategory: Categorys.ShopMenuEnum.SHOP_ALL,
    articles: [],
    offset: 0,
    limit: SHOPPE_LOAD_MORE_NUMBER,
  }))
);
