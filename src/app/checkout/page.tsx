import Container from '@/components/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your purchase',
};

export default function CheckoutPage() {
  return (
    <Container className="my-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p>Checkout flow is not implemented.</p>
    </Container>
  );
}
