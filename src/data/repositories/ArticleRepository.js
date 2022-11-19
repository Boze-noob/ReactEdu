import { articleData } from "../../fakeData/article";
import { useArticleStore } from "../../stores/ArticleStore";

export function getArticles() {
  useArticleStore.setState({ isLoading: false, articles: articleData });
}
