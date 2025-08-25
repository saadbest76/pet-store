import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let result = [...products];
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const sort = searchParams.get('sort');
  if (category) {
    result = result.filter(p => p.category === category);
  }
  if (search) {
    const lower = search.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(lower));
  }
  if (sort === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  }
  return NextResponse.json(result);
}
