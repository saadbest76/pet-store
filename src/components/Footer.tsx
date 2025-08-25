import React from 'react';
import Link from 'next/link';
import Container from './Container';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 mt-8 py-4 text-sm">
    <Container className="flex justify-between">
      <span>&copy; {new Date().getFullYear()} Pet Store</span>
      <div className="flex gap-4">
        <Link href="/privacy" className="hover:underline">Privacy</Link>
        <Link href="/terms" className="hover:underline">Terms</Link>
      </div>
    </Container>
  </footer>
);

export default Footer;
