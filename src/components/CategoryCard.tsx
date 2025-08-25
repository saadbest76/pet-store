import Link from 'next/link';
import React from 'react';
import type { Category } from '@/data/categories';

interface Props {
  category: Category;
}

const CategoryCard: React.FC<Props> = ({ category }) => (
  <Link
    href={`/products?category=${category.slug}`}
    className="block overflow-hidden rounded-lg shadow hover:shadow-lg"
  >
    <img src={category.image} alt={category.name} className="h-40 w-full object-cover" />
    <div className="p-4 text-center font-semibold">{category.name}</div>
  </Link>
);

export default CategoryCard;
