import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/products";
import { actionGetProducts } from "../actions/products";

export default async function ProductsPage() {
  let products: Product[] = await actionGetProducts();

  return (
    <main className="m-4">
      <div className="flex flex-col">
        <div className="products-container ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
