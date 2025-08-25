"use client";
import Container from '@/components/Container';
import { useCart } from '@/contexts/CartContext';
import { formatMoney } from '@/lib/format';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Your shopping cart',
};

export default function CartPage() {
  const { items, subtotal, updateQty, remove, clear } = useCart();
  return (
    <Container className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.product.id} className="flex justify-between">
                <span>{item.product.name}</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={e => updateQty(item.product.id, Number(e.target.value))}
                    className="w-16 rounded border text-center"
                  />
                  <span>{formatMoney(item.product.price * item.quantity)}</span>
                  <button onClick={() => remove(item.product.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <button onClick={clear}>Clear</button>
            <span className="font-bold">Subtotal: {formatMoney(subtotal)}</span>
          </div>
          <div className="mt-4 text-right">
            <Link href="/checkout" className="rounded bg-blue-600 px-4 py-2 text-white">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
}
