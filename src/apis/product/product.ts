import { loadData } from "../api";

export async function getAllProducts() {
  const products = await loadData("products");
  return products;
}

export async function getProductDetails(id: string) {
  const products = await loadData(`product/${id}`);
  return products;
}
