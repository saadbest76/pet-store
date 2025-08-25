"use client";
import Link from 'next/link';
import React from 'react';
import MiniCart from './MiniCart';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold">Pet Store</Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <MiniCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
