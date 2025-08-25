"use client";
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { items } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-center">Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center border p-4 rounded-md">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              </li>
            ))}
          </ul>
          <div className="text-right mt-4 font-bold">Total: ${total.toFixed(2)}</div>
          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-md">Checkout</button>
        </>
      )}
    </div>
  );
}
