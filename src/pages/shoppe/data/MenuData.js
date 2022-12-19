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
        title: Items.ShopMenuEnum.SUNGLASS,
      },
      {
        title: "HAIR ACCESSORIES",
      },
      {
        title: "HATS",
      },
    ],
  },
  {
    title: "CLOTHING",
    items: [
      {
        title: "ACTIVE WEAR",
      },
      {
        title: "DRESSES",
      },
      {
        title: "TOPS",
      },
      {
        title: "KNITS",
      },
      {
        title: "PANTS",
      },
      {
        title: "DENIM",
      },
      {
        title: "SHORTS",
      },
      {
        title: "SKIRTS",
      },
      {
        title: "SWIMWEAR",
      },
    ],
  },
  {
    title: "BAGS",
  },
  {
    title: "SHOES",
    items: [
      {
        title: "BOOTS",
      },
      {
        title: "HEELS",
      },
      {
        title: "FLATS",
      },
      {
        title: "SNEAKERS",
      },
      {
        title: "SANDALS",
      },
    ],
  },
  {
    title: "BEAUTY",
    items: [
      {
        title: "NAIL POLISH",
      },
    ],
  },
];
