import Container from '@/components/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us',
};

export default function ContactPage() {
  return (
    <Container className="my-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>Email: contact@example.com</p>
    </Container>
  );
}
