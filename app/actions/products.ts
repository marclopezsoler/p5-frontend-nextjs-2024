import { getProducts } from "@/lib/products";

export async function actionGetProducts() {
  const product = await getProducts();
  return product;
}
