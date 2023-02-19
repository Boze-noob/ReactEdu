import { ShopMenuEnum } from "../../types/enumerations/shopMenu";
import { SHOPPE_LOAD_MORE_NUMBER } from "../constants/Articles";
import {
  jewlery,
  belts,
  sunglasses,
  hairAccessories,
  hats,
  activeWear,
  dresses,
  tops,
  knits,
  pants,
  denim,
  shorts,
  skirts,
  swimwear,
  bags,
  boots,
  heels,
  flats,
  sneakers,
  sandals,
  nailPolish,
} from "../../fakeData/shoppe";

var allArticles = jewlery.concat(
  belts,
  sunglasses,
  hairAccessories,
  hats,
  activeWear,
  dresses,
  tops,
  knits,
  pants,
  denim,
  shorts,
  skirts,
  swimwear,
  bags,
  boots,
  heels,
  flats,
  sneakers,
  sandals,
  nailPolish
);

export function getAllShoppe() {
  return allArticles.slice(0, SHOPPE_LOAD_MORE_NUMBER);
}

export function changeCategoryShoppe(category) {
  //Do get category logic in service

  switch (category) {
    case ShopMenuEnum.SHOP_ALL:
      return allArticles.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.JEWELRY:
      return jewlery.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.SUNGLASS:
      return sunglasses.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.HAIR_ACCESSORIES:
      return hairAccessories.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.HATS:
      return hats.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.ACTIVE_WEAR:
      return activeWear.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.DRESSES:
      return dresses.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.TOPS:
      return tops.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.KNITS:
      return knits.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.PANTS:
      return pants.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.DENIM:
      return denim.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.SHORTS:
      return shorts.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.SKIRTS:
      return skirts.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.SWIMWEAR:
      return swimwear.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.BAGS:
      return bags.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.BOOTS:
      return boots.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.HEELS:
      return heels.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.FLATS:
      return flats.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.SNEAKERS:
      return sneakers.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.SANDALS:
      return sandals.slice(0, SHOPPE_LOAD_MORE_NUMBER);

    case ShopMenuEnum.NAIL_POLISH:
      return nailPolish.slice(0, SHOPPE_LOAD_MORE_NUMBER);
  }
  return [];
}

export function loadMoreShoppe(category, start, end) {
  //Do get category logic in service
  switch (category) {
    case ShopMenuEnum.SHOP_ALL:
      return allArticles.slice(start, end);

    case ShopMenuEnum.JEWELRY:
      return jewlery.slice(start, end);

    case ShopMenuEnum.SUNGLASS:
      return sunglasses.slice(start, end);

    case ShopMenuEnum.HAIR_ACCESSORIES:
      return hairAccessories.slice(start, end);

    case ShopMenuEnum.HATS:
      return hats.slice(start, end);

    case ShopMenuEnum.ACTIVE_WEAR:
      return activeWear.slice(start, end);

    case ShopMenuEnum.DRESSES:
      return dresses.slice(start, end);

    case ShopMenuEnum.TOPS:
      return tops.slice(start, end);

    case ShopMenuEnum.KNITS:
      return knits.slice(start, end);

    case ShopMenuEnum.PANTS:
      return pants.slice(start, end);

    case ShopMenuEnum.DENIM:
      return denim.slice(start, end);

    case ShopMenuEnum.SHORTS:
      return shorts.slice(start, end);

    case ShopMenuEnum.SKIRTS:
      return skirts.slice(start, end);

    case ShopMenuEnum.SWIMWEAR:
      return swimwear.slice(start, end);

    case ShopMenuEnum.BAGS:
      return bags.slice(start, end);

    case ShopMenuEnum.BOOTS:
      return boots.slice(start, end);

    case ShopMenuEnum.HEELS:
      return heels.slice(start, end);

    case ShopMenuEnum.FLATS:
      return flats.slice(start, end);

    case ShopMenuEnum.SNEAKERS:
      return sneakers.slice(start, end);

    case ShopMenuEnum.SANDALS:
      return sandals.slice(start, end);

    case ShopMenuEnum.NAIL_POLISH:
      return nailPolish.slice(start, end);
  }
  return [];
}
