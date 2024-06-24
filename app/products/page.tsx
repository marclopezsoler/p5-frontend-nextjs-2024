"use client";

import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  color: string;
  seller: string;
  category: string;
  dateOfCreation: Date;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="m-4">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
}
