'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { items, setOpen } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="border-b bg-white">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="PetStore" width={120} height={40} />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/products" className="hover:text-primary">Products</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <button onClick={() => setOpen(true)} className="relative">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="18" cy="21" r="1" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </Container>
    </nav>
  );
}
