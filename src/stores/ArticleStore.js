import create from "zustand";
import { immer } from "zustand/middleware/immer";

export const useArticleStore = create(
  immer(() => ({
    isLoading: true,
    articles: [],
  }))
);
