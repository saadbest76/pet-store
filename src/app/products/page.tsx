import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse products',
};

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProductsPage({ searchParams }: Props) {
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined;
  const filtered = category ? products.filter(p => p.category === category) : products;

  return (
    <Container className="my-8">
      <div className="mb-4 flex gap-4">
        <Link href="/products" className={!category ? 'font-bold' : ''}>All</Link>
        {categories.map(cat => (
          <Link
            key={cat.slug}
            href={`/products?category=${cat.slug}`}
            className={category === cat.slug ? 'font-bold' : ''}
          >
            {cat.name}
          </Link>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </Container>
  );
}
