import { useShoppeStore } from "../stores/ShoppeStore";
import {
  changeCategoryShoppe,
  loadMoreShoppe,
} from "../data/repositories/ShoppeRepository";
import { SHOPPE_LOAD_MORE_NUMBER } from "../data/constants/Articles";
import { getAllShoppe } from "../data/repositories/ShoppeRepository";
import * as Categorys from "../types/enumerations/shopMenu";

export const getAllShoppeService = () => {
  useShoppeStore.setState({
    articles: getAllShoppe(),
    selectedCategory: Categorys.ShopMenuEnum.SHOP_ALL,
  });
};

export const changeCategoryShoppeService = (category) => {
  console.log("Selected category is " + category);
  useShoppeStore.setState({
    selectedCategory: category,
    articles: changeCategoryShoppe(category),
    offset: 0,
    hasLoadMore: true,
  });
};

export const loadMoreShoppeService = (category, offset, articles) => {
  const newArticles = loadMoreShoppe(
    category,
    offset + SHOPPE_LOAD_MORE_NUMBER,
    offset + 2 * SHOPPE_LOAD_MORE_NUMBER
  );

  if (newArticles.length === 0)
    useShoppeStore.setState({
      hasLoadMore: false,
    });

  useShoppeStore.setState({
    selectedCategory: category,
    articles: articles.concat(newArticles),
    offset: offset + SHOPPE_LOAD_MORE_NUMBER,
  });
};
