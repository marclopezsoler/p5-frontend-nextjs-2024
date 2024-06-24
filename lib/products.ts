import { prisma } from "@/db/db";

export type Product = {
  id: number;
  Name: String;
  Price: number;
  Description: String;
  Color: String;
  Seller: string;
  Category: string;
  created_at: Date;
};

export async function getProducts() {
  return await prisma.product.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
}

export async function getSingleProduct(id: number) {
  return await prisma.product.findUniqueOrThrow({
    where: { id },
  });
}

export async function addProduct(data: any) {
  return await prisma.product.create({ data });
}

export async function deleteProduct(productId: number) {
  const id = productId;
  return await prisma.product.delete({
    where: { id },
  });
}
