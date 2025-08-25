'use client';

import { products, Product } from '../../../data/products';
import Image from 'next/image';
import Container from '../../../components/Container';
import RatingStars from '../../../components/RatingStars';
import QuantityInput from '../../../components/QuantityInput';
import ProductCard from '../../../components/ProductCard';
import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  return (
    <Container className="py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="object-cover rounded"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <RatingStars value={product.rating} />
          <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div className="mt-4 flex items-center space-x-4">
            <QuantityInput value={qty} onChange={setQty} />
            <button
              onClick={() => addItem(product, qty)}
              className="bg-primary text-white px-6 py-2 rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map((r) => (
              <ProductCard key={r.id} product={r} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
