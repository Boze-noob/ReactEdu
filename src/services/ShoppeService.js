import { useShoppeStore } from "../stores/ShoppeStore";

export const changeSelectedShopperCategory = (newCategory) => {
  useShoppeStore.setState({ selectedCategory: newCategory });
};
