import Link from 'next/link';

export default function CategoryCard({ category, image }: { category: string; image: string }) {
  return (
    <Link
      href={`/products?category=${category}`}
      className="block rounded-lg border p-4 text-center hover:shadow"
    >
      <img
        src={image}
        alt={category}
        className="mx-auto mb-2 h-24 w-24 object-cover"
      />
      <p className="capitalize font-medium">{category.replace('-', ' ')}</p>
    </Link>
  );
}
