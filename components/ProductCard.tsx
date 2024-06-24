import { Product } from "@/lib/products";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type productCardProps = {
  product: Product;
};

export default function ProductCard({ product }: productCardProps) {
  return (
    <Card className="hover:shadow-lg transition p-4 m-4">
      <div className="flex bg-zinc-200 w-100 h-72 rounded-xl p-4 m-4 pb-2 mb-2"></div>
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="font-bold text-lg">{product.Name}</CardTitle>
          <a className="font-bold text-lg">{product.Price}€</a>
        </div>
        <CardDescription className="font-normal text-base text-gray-600">
          {product.Category}
        </CardDescription>
        <CardDescription className="text-md line-clamp-2">
          {product.Description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row flex-1 justify-between">
        <Link
          href={`/products/${product.id}`}
          className="font-semibold text-white bg-black px-4 py-2 rounded-xl transition hover:scale-105"
        >
          READ MORE
        </Link>
      </CardContent>
    </Card>
  );
}
