"use client";

import ProductCard from "@/components/ProductCard";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  color: string;
  sellerId: number | null;
  seller: Seller | null;
};

type Seller = {
  id: number;
  name: string;
  email: string,
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sellers, setSellers] = useState<Seller[]>([]);

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

    const fetchSellers = async () => {
      try {
        const response = await fetch("/api/sellers");
        const data = await response.json();
        setSellers(data);
      } catch (error) {
        console.error("Error fetching sellers:", error);
      }
    };

    fetchProducts();
    fetchSellers();
  }, []);

  return (
    <main className="m-4">
      <div className="products-container">
        {sellers.map((seller) => (
          <a>{seller.name}</a>
        ))}
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
}
