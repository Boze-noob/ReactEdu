import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { FooterModel } from "../domain/models/FooterModel";

export const useFooterStore = create(
  immer(() => ({
    footerData: [],
  }))
);
