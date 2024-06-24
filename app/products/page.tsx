"use client";

import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
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
  const [filter, setFilter] = useState<string>("name");

  const fetchProducts = async (orderBy: string) => {
    try {
      const response = await fetch(`/api/products?orderBy=${orderBy}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(filter);
  }, [filter]);

  const handleFilter = (orderBy: string) => {
    setFilter(orderBy);
  };

  return (
    <main className="m-4">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 m-4">
          <a className="font-medium text-sm">Sort by</a>
          <Button
            className={`text-md size-sm variant-link rounded-xl ${filter === "name" ? "font-bold" : ""}`}
            onClick={() => handleFilter("name")}
          >
            Name
          </Button>
          <Button
            className={`text-md size-sm variant-link rounded-xl ${filter === "price" ? "font-bold" : ""}`}
            onClick={() => handleFilter("price")}
          >
            Price
          </Button>
        </div>
        <div className="products-container ">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
