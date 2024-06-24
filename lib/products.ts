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
      name: "asc",
    },
  });
}
