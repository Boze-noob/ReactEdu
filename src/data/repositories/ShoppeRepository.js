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

export function getAllShoppe() {
  var articles = jewlery.concat(
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
  console.log("GEt all" + JSON.stringify(articles));
  return articles.slice(0, SHOPPE_LOAD_MORE_NUMBER);
}

export function changeCategoryShoppe(category) {
  //Do get category logic in service
  var articles = [];
  switch (category) {
    case ShopMenuEnum.JEWELRY:
      articles.push(jewlery.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SUNGLASS:
      articles.push(sunglasses.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.HAIR_ACCESSORIES:
      articles.push(hairAccessories.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.HATS:
      articles.push(hats.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.ACTIVE_WEAR:
      articles.push(activeWear.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.DRESSES:
      articles.push(dresses.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.TOPS:
      articles.push(tops.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.KNITS:
      articles.push(knits.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.PANTS:
      articles.push(pants.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.DENIM:
      articles.push(denim.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SHORTS:
      articles.push(shorts.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SKIRTS:
      articles.push(skirts.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SWIMWEAR:
      articles.push(swimwear.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.BAGS:
      articles.push(bags.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.BOOTS:
      articles.push(boots.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.HEELS:
      articles.push(heels.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.FLATS:
      articles.push(flats.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SNEAKERS:
      articles.push(sneakers.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SANDALS:
      articles.push(sandals.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.NAIL_POLISH:
      articles.push(nailPolish.slice(0, SHOPPE_LOAD_MORE_NUMBER));
      break;
  }
  return articles;
}

export function loadMoreShoppe(category, offset) {
  //Do get category logic in service
  var articles = [];
  switch (category) {
    case ShopMenuEnum.JEWELRY:
      articles.push(jewlery.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SUNGLASS:
      articles.push(sunglasses.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.HAIR_ACCESSORIES:
      articles.push(hairAccessories.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.HATS:
      articles.push(hats.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.ACTIVE_WEAR:
      articles.push(activeWear.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.DRESSES:
      articles.push(dresses.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.TOPS:
      articles.push(tops.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.KNITS:
      articles.push(knits.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.PANTS:
      articles.push(pants.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.DENIM:
      articles.push(denim.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SHORTS:
      articles.push(shorts.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SKIRTS:
      articles.push(skirts.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SWIMWEAR:
      articles.push(swimwear.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.BAGS:
      articles.push(bags.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.BOOTS:
      articles.push(boots.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.HEELS:
      articles.push(heels.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.FLATS:
      articles.push(flats.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SNEAKERS:
      articles.push(sneakers.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.SANDALS:
      articles.push(sandals.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
    case ShopMenuEnum.NAIL_POLISH:
      articles.push(nailPolish.slice(offset, SHOPPE_LOAD_MORE_NUMBER));
      break;
  }
  return articles;
}
