import CategoryCard from '../components/CategoryCard';

const categories = [
  { title: 'Dogs', image: 'https://via.placeholder.com/300x200?text=Dogs', href: '/categories/dogs' },
  { title: 'Cats', image: 'https://via.placeholder.com/300x200?text=Cats', href: '/categories/cats' },
  { title: 'Birds', image: 'https://via.placeholder.com/300x200?text=Birds', href: '/categories/birds' },
  { title: 'Accessories', image: 'https://via.placeholder.com/300x200?text=Accessories', href: '/categories/accessories' },
];

export default function Home() {
  return (
    <div>
      <section className="text-center py-20 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to PetStore</h1>
        <a href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-md">Shop Now</a>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </section>
    </div>
  );
}
