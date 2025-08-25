import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <Container className="py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} PetStore</p>
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:text-primary">Privacy</Link>
          <Link href="/terms" className="hover:text-primary">Terms</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </Container>
    </footer>
  );
}
