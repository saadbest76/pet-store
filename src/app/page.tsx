import Hero from '@/components/Hero';
import Container from '@/components/Container';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Pet Store home page',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Container className="my-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {categories.map(cat => (
          <CategoryCard key={cat.slug} category={cat} />
        ))}
      </Container>
    </div>
  );
}
