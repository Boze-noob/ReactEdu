import { articleData } from "../../fakeData/article";
import { useArticleStore } from "../../stores/ArticleStore";

export function getArticles() {
  useArticleStore.setState({ isLoading: false, articles: articleData.slice() });
}

export function getFashionArticles() {
  useArticleStore.setState({
    isLoading: false,
    fashionArticles: articleData.filter((item) => item.category === 0),
  });
}

export function getBeautyArticles() {
  useArticleStore.setState({
    isLoading: false,
    beautyArticles: articleData.filter((item) => item.category === 1),
  });
}

export function getLifestyleArticles() {
  useArticleStore.setState({
    isLoading: false,
    lifestyleArticles: articleData.filter((item) => item.category === 2),
  });
}

export function getCollagesArticles() {
  useArticleStore.setState({
    isLoading: false,
    collagesArticles: articleData.filter((item) => item.category === 3),
  });
}

export function getHomeArticles() {
  useArticleStore.setState({
    isLoading: false,
    homeArticles: articleData.filter((item) => item.category === 4),
  });
}
