import { prisma } from "@/db/db";

export type Product = {
  id: number;
  name: String;
  price: number;
  description: String;
  color: String;
  seller: string;
  category: string;
  dateOfCreation: Date;
};

export async function getProducts() {
  return await prisma.product.findMany({
    orderBy: {
      dateOfCreation: "asc",
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
