import Link from 'next/link';
import React from 'react';
import type { Product } from '@/data/products';
import RatingStars from './RatingStars';
import { formatMoney } from '@/lib/format';
import QuantityInput from './QuantityInput';
import { useCart } from '@/contexts/CartContext';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { add } = useCart();
  const [qty, setQty] = React.useState(1);
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border shadow-sm">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <RatingStars rating={product.rating} />
          <p className="text-sm text-gray-600">{formatMoney(product.price)}</p>
        </div>
      </Link>
      <div className="mt-auto flex items-center justify-between p-4">
        <QuantityInput value={qty} onChange={setQty} />
        <button
          className="rounded bg-blue-600 px-3 py-1 text-white"
          onClick={() => add(product, qty)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
