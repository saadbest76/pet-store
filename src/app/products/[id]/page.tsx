import React from 'react';
import { products, type Product } from '@/data/products';
import Container from '@/components/Container';
import RatingStars from '@/components/RatingStars';
import { formatMoney } from '@/lib/format';
import QuantityInput from '@/components/QuantityInput';
import { useCart } from '@/contexts/CartContext';
import type { Metadata } from 'next';

interface Props {
  params: { id: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find(p => p.id === Number(params.id));
  return {
    title: product ? product.name : 'Product',
    description: product?.description,
  };
}

const ProductContent: React.FC<{ product: Product }> = ({ product }) => {
  "use client";
  const { add } = useCart();
  const [qty, setQty] = React.useState(1);
  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <RatingStars rating={product.rating} />
      <p className="my-2">{formatMoney(product.price)}</p>
      <p>{product.description}</p>
      <div className="mt-4 flex items-center gap-4">
        <QuantityInput value={qty} onChange={setQty} />
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => add(product, qty)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.id === Number(params.id));
  if (!product) return <Container>Product not found</Container>;
  return (
    <Container className="my-8 grid gap-8 md:grid-cols-2">
      <img src={product.image} alt={product.name} className="w-full" />
      <ProductContent product={product} />
    </Container>
  );
}
