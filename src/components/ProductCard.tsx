'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import RatingStars from './RatingStars';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <div className="border rounded p-4 flex flex-col">
      <Link href={`/products/${product.slug}`} className="flex-1">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={150}
          className="mx-auto mb-4 object-cover"
        />
        <h3 className="font-medium">{product.title}</h3>
        <RatingStars value={product.rating} />
        <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
      </Link>
      <button
        onClick={() => addItem(product, 1)}
        className="mt-4 bg-primary text-white py-2 rounded"
      >
        Add to cart
      </button>
    </div>
  );
}
