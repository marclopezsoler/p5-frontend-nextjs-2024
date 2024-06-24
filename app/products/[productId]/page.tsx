import React, { useState, useEffect } from "react";
import { Product } from "@/lib/products";

type ProductDetailsProps = {
  product: Product | null;
  isLoading: boolean;
};

export default function ProductDetails({
  product,
  isLoading,
}: ProductDetailsProps) {
  return (
    <div className="product-details">
      {isLoading ? (
        <p>Loading product details...</p>
      ) : (
        <>
          <h2>{product?.name}</h2>
          <p className="price">{product?.price} €</p>
          <div className="description">{product?.description}</div>
          <ul className="details">
            <li>Color: {product?.color}</li>
            <li>Seller: {product?.seller}</li>
            <li>Category: {product?.category}</li>
            <li>Date Created: {product?.dateOfCreation.toDateString()}</li>
          </ul>
        </>
      )}
    </div>
  );
}
