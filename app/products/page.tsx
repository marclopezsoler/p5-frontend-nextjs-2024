"use client"

import { useEffect, useState } from 'react';

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
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            {product.Comment.length > 0 && (
              <div>
                <h3>Comments:</h3>
                <ul>
                  {product.Comment.map(comment => (
                    <li key={comment.id}>
                      <p><strong>{comment.username}:</strong> {comment.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.Comment.length === 0 && (
              <p>No comments yet</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
