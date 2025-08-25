import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Pet Store',
    template: '%s | Pet Store',
  },
  description: 'An example pet store built with Next.js',
  openGraph: {
    title: 'Pet Store',
    description: 'An example pet store built with Next.js',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
