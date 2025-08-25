"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">PetStore</Link>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${open ? 'block' : 'hidden'} w-full md:flex md:w-auto md:items-center`}> 
          <Link href="/" className="block mt-2 md:mt-0 md:ml-6">Home</Link>
          <Link href="/categories" className="block mt-2 md:mt-0 md:ml-6">Categories</Link>
          <Link href="/products" className="block mt-2 md:mt-0 md:ml-6">Products</Link>
          <Link href="/cart" className="block mt-2 md:mt-0 md:ml-6">Cart</Link>
          <Link href="/contact" className="block mt-2 md:mt-0 md:ml-6">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
