import { NextResponse } from 'next/server';
import { products } from '@/data/products';

interface Params {
  params: { id: string };
}

export function GET(_: Request, { params }: Params) {
  const product = products.find(p => p.id === Number(params.id));
  if (!product) {
    return new NextResponse('Not found', { status: 404 });
  }
  return NextResponse.json(product);
}
