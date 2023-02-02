import * as Routes from "../../pages/router/Routes";

export const Categorys = {
  0: "Fashion",
  1: "Beauty",
  2: "Lifestyle",
  3: "Collages",
  4: "Home",
};

export const getPathFromCategory = (category) => {
  let route = "/";
  switch (category) {
    case 0:
      route = Routes.FASHION_ROUTE;
      break;
    case 1:
      route = Routes.BEAUTY_ROUTE;
      break;
    case 2:
      route = Routes.LIFESTYLE_ROUTE;
      break;
    case 3:
      route = Routes.COLLAGES_ROUTE;
      break;
  }
  return route;
};
