import CategoryCard from '../../components/CategoryCard';

const categories = [
  { title: 'Dogs', image: 'https://via.placeholder.com/300x200?text=Dogs', href: '/categories/dogs' },
  { title: 'Cats', image: 'https://via.placeholder.com/300x200?text=Cats', href: '/categories/cats' },
  { title: 'Birds', image: 'https://via.placeholder.com/300x200?text=Birds', href: '/categories/birds' },
  { title: 'Accessories', image: 'https://via.placeholder.com/300x200?text=Accessories', href: '/categories/accessories' },
];

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-center">Categories</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </div>
  );
}
