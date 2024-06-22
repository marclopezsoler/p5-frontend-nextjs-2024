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
  Comment: Comment[];
  seller: Seller | null;
  Order: Order[];
};

type Comment = {
  id: number;
  text: string;
  username: string;
  productId: number;
};

type Seller = {
  id: number;
  name: string;
};

type Order = {
  id: number;
  productId: number;
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
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          // <Card>
          //   <li key={product.id}>
          //     <h2>{product.name}</h2>
          //     <p>{product.description}</p>
          //     <p>Price: ${product.price}</p>
          //     <p>Color: {product.color}</p>
          //     {product.Comment.length > 0 && (
          //       <div>
          //         <h3>Comments:</h3>
          //         <ul>
          //           {product.Comment.map((comment) => (
          //             <li key={comment.id}>
          //               <p>
          //                 <strong>{comment.username}:</strong> {comment.text}
          //               </p>
          //             </li>
          //           ))}
          //         </ul>
          //       </div>
          //     )}
          //     {product.Comment.length === 0 && <p>No comments yet</p>}
          //   </li>
          // </Card>
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
}
