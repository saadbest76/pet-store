"use client";
import Image from 'next/image';
import { Product, useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <Image src={product.image} alt={product.name} width={300} height={200} className="rounded-md object-cover" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="mt-1 text-gray-600">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md">Add to Cart</button>
    </div>
  );
}
