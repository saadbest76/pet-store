"use client";
import Link from 'next/link';
import React from 'react';
import { useCart } from '@/contexts/CartContext';

const MiniCart: React.FC = () => {
  const { totalQty } = useCart();
  return (
    <Link href="/cart" aria-label="Cart" className="relative">
      <span>🛒</span>
      {totalQty > 0 && (
        <span className="absolute -top-2 -right-2 rounded-full bg-red-500 px-1 text-xs text-white">
          {totalQty}
        </span>
      )}
    </Link>
  );
};

export default MiniCart;
