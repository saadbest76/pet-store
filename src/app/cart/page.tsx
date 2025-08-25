'use client';

import Container from '../../components/Container';
import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import QuantityInput from '../../components/QuantityInput';
import Link from 'next/link';

export default function CartPage() {
  const { items, updateItem, removeItem } = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.length > 0 && (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4 border-b pb-4">
              <Image
                src={item.product.image}
                alt={item.product.title}
                width={80}
                height={80}
                className="rounded"
              />
              <div className="flex-1">
                <p className="font-medium">{item.product.title}</p>
                <p>${item.product.price.toFixed(2)}</p>
              </div>
              <QuantityInput
                value={item.quantity}
                onChange={(q) => updateItem(item.product.id, q)}
              />
              <p className="w-20 text-right">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-end font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>
          <div className="flex justify-end">
            <Link href="/checkout" className="bg-primary text-white px-6 py-2 rounded">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
}
