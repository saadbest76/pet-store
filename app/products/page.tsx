import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-center">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
