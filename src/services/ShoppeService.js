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
  console.log("Selected category" + category);
  console.log(
    "Change category -> " + JSON.stringify(changeCategoryShoppe(category))
  );
  useShoppeStore.setState({
    selectedCategory: category,
    articles: changeCategoryShoppe(category),
    offset: 0,
  });
};

export const loadMoreShoppeService = (category, offset, articles) => {
  console.log(
    "Load more  -> " +
      JSON.stringify(loadMoreShoppe(category, offset + SHOPPE_LOAD_MORE_NUMBER))
  );
  useShoppeStore.setState({
    selectedCategory: category,
    articles: articles.push(
      ...loadMoreShoppe(category, offset + SHOPPE_LOAD_MORE_NUMBER)
    ),
    offset: offset + SHOPPE_LOAD_MORE_NUMBER,
  });
};
