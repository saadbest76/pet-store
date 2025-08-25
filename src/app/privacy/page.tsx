import Container from '@/components/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy',
};

export default function PrivacyPage() {
  return (
    <Container className="my-8">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>This is a placeholder privacy policy.</p>
    </Container>
  );
}
