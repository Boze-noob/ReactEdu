import { useShoppeStore } from "../stores/ShoppeStore";
import {
  changeCategoryShoppe,
  loadMoreShoppe,
} from "../data/repositories/ShoppeRepository";
import { SHOPPE_LOAD_MORE_NUMBER } from "../data/constants/Articles";
import { getAllShoppe } from "../data/repositories/ShoppeRepository";

export const getAllShoppeService = () => {
  useShoppeStore.setState({
    articles: getAllShoppe(),
  });
};

export const changeCategoryShoppeService = (category) => {
  useShoppeStore.setState({
    selectedCategory: category,
    articles: changeCategoryShoppe(category),
    offset: 0,
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
