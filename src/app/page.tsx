import Hero from '../components/Hero';
import Container from '../components/Container';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = [
  { key: 'dogs', title: 'Dogs' },
  { key: 'cats', title: 'Cats' },
  { key: 'birds', title: 'Birds' },
  { key: 'fish', title: 'Fish' },
  { key: 'small-pets', title: 'Small Pets' },
];

export default function HomePage() {
  const featured = products.slice(0, 6);
  return (
    <>
      <Hero />
      <Container className="py-12">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
          {categories.map((c) => (
            <CategoryCard key={c.key} category={c.key} image="/placeholder.svg" />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </>
  );
}
