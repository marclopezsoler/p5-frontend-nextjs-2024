import { Product } from "@/lib/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type productCardProps = {
  product: Product;
};

export default function ProductCard({ product }: productCardProps) {
  return (
    <Card className="products-card">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{product.price} €</p>
        <p>{product.color}</p>
      </CardContent>
      <CardFooter>
        <p>{product.color}</p>
      </CardFooter>
    </Card>
  );
}
