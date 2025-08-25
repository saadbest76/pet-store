import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <Container className="text-center">
        <Image src="/logo.svg" alt="PetStore" width={160} height={60} className="mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Everything your furry friend needs</h1>
        <Link href="/products" className="bg-primary text-white px-6 py-3 rounded">
          Shop Now
        </Link>
      </Container>
    </section>
  );
}
