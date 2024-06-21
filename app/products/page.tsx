"use client"

import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  color: string;
  sellerId: number | null;
  comments: Comment[];
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

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
