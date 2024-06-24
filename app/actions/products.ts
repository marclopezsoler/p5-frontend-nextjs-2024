"use server";

import {
  addProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
} from "@/lib/products";
import { redirect } from "next/navigation";

export async function actionGetProducts() {
  const products = await getProducts();
  return products;
}

export async function actionGetSingleProduct(id: number) {
  const product = await getSingleProduct(id);
  return product;
}

export async function actionAddProduct(data: FormData) {
  const product = await addProduct(data);
  redirect("/products");
  return product;
}

export async function actiondeleteProduct(productId: number) {
  const product = await deleteProduct(productId);
  redirect("/products");
  return product;
}
