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
          <CardTitle className="font-bold text-lg">{product.name}</CardTitle>
          <a className="font-bold text-lg">{product.price}€</a>
        </div>
        <CardDescription className="font-normal text-base text-gray-600">
          {product.category}
        </CardDescription>
        <CardDescription className="text-md line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row flex-1 justify-between">
        <Link
          href={`/products/${product.id}`}
          className="font-semibold text-white bg-black px-4 py-2 rounded-xl transition hover:scale-105"
        >
          BUY NOW
        </Link>
      </CardContent>
    </Card>
  );
}
