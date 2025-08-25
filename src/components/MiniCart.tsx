'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function MiniCart() {
  const { items, isOpen, setOpen, removeItem } = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className={cn('fixed inset-0 z-40', isOpen ? '' : 'pointer-events-none')}>
      <div
        className={cn(
          'absolute inset-0 bg-black/50 transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          'absolute right-0 top-0 h-full w-80 bg-white shadow-lg transition-transform flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-medium">Cart</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          {items.length === 0 && <p className="text-sm">Your cart is empty.</p>}
          {items.map((item) => (
            <div key={item.product.id} className="flex space-x-2">
              <Image
                src={item.product.image}
                alt={item.product.title}
                width={60}
                height={60}
                className="rounded object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.product.title}</p>
                <p className="text-sm">${item.product.price.toFixed(2)}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-xs text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <p className="font-medium">Total: ${total.toFixed(2)}</p>
          <div className="mt-2 flex space-x-2">
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-gray-200 py-2 rounded"
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-primary text-white py-2 rounded"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
