'use client';

import { useState } from 'react';
import Container from '../../components/Container';
import ProductCard from '../../components/ProductCard';
import { products, Category } from '../../data/products';

const categories: { key: Category; label: string }[] = [
  { key: 'dogs', label: 'Dogs' },
  { key: 'cats', label: 'Cats' },
  { key: 'birds', label: 'Birds' },
  { key: 'fish', label: 'Fish' },
  { key: 'small-pets', label: 'Small Pets' },
];

export default function ProductsPage() {
  const [category, setCategory] = useState<'all' | Category>('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'none' | 'low' | 'high'>('none');

  let filtered = products.filter(
    (p) =>
      (category === 'all' || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );
  if (sort === 'low') filtered = filtered.slice().sort((a, b) => a.price - b.price);
  if (sort === 'high') filtered = filtered.slice().sort((a, b) => b.price - a.price);

  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as any)}
          className="border p-2 rounded"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded flex-1"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
          className="border p-2 rounded"
        >
          <option value="none">Sort</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Container>
  );
}
