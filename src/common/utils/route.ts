import { transformSpacesToHypen } from ".";

export const productDetailsRoute = (name: string, id: string, type: number) => {
  switch (type) {
    case 1:
      return `products/buy-online-${transformSpacesToHypen(name)}-${id}`;
    case 2:
      return `buy-online-${transformSpacesToHypen(name)}-${id}`;
    default:
      return "";
  }
};
