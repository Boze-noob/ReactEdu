import * as Items from "../../../types/enumerations/shopMenu";

export const MenuData = [
  {
    title: Items.ShopMenuEnum.SHOP_ALL,
  },
  {
    title: Items.ShopMenuEnum.ACCESSORIES,
    items: [
      {
        title: Items.ShopMenuEnum.JEWELRY,
      },
      {
        title: Items.ShopMenuEnum.BELTS,
      },
      {
        title: Items.ShopMenuEnum.SUNGLASS,
      },
      {
        title: Items.ShopMenuEnum.HAIR_ACCESSORIES,
      },
      {
        title: Items.ShopMenuEnum.HATS,
      },
    ],
  },
  {
    title: Items.ShopMenuEnum.CLOTHING,
    items: [
      {
        title: Items.ShopMenuEnum.ACTIVE_WEAR,
      },
      {
        title: Items.ShopMenuEnum.DRESSES,
      },
      {
        title: Items.ShopMenuEnum.TOPS,
      },
      {
        title: Items.ShopMenuEnum.KNITS,
      },
      {
        title: Items.ShopMenuEnum.PANTS,
      },
      {
        title: Items.ShopMenuEnum.DENIM,
      },
      {
        title: Items.ShopMenuEnum.SHORTS,
      },
      {
        title: Items.ShopMenuEnum.SKIRTS,
      },
      {
        title: Items.ShopMenuEnum.SWIMWEAR,
      },
    ],
  },
  {
    title: Items.ShopMenuEnum.BAGS,
  },
  {
    title: Items.ShopMenuEnum.SHOES,
    items: [
      {
        title: Items.ShopMenuEnum.BOOTS,
      },
      {
        title: Items.ShopMenuEnum.HEELS,
      },
      {
        title: Items.ShopMenuEnum.FLATS,
      },
      {
        title: Items.ShopMenuEnum.SNEAKERS,
      },
      {
        title: Items.ShopMenuEnum.SANDALS,
      },
    ],
  },
  {
    title: Items.ShopMenuEnum.BEAUTY,
    items: [
      {
        title: Items.ShopMenuEnum.NAIL_POLISH,
      },
    ],
  },
];
