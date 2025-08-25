import Container from '@/components/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for using the site',
};

export default function TermsPage() {
  return (
    <Container className="my-8">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p>These are placeholder terms.</p>
    </Container>
  );
}
