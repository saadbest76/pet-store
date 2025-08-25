'use client';

import { FormEvent, useState } from 'react';
import Container from '../../components/Container';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const [success, setSuccess] = useState(false);
  const total = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('Order placed');
    clear();
    setSuccess(true);
  }

  if (success)
    return (
      <Container className="py-12">
        <h1 className="text-2xl font-bold">Thank you!</h1>
        <p>Your order has been placed.</p>
      </Container>
    );

  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
        <input required placeholder="Name" className="border p-2 rounded" />
        <input
          required
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input required placeholder="Address" className="border p-2 rounded" />
        <button
          type="submit"
          className="bg-primary text-white py-2 rounded"
        >
          Place Order (${total.toFixed(2)})
        </button>
      </form>
    </Container>
  );
}
