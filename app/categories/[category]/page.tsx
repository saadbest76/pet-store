interface Props {
  params: { category: string };
}

const images: Record<string, string> = {
  dogs: 'https://via.placeholder.com/400x300?text=Dogs',
  cats: 'https://via.placeholder.com/400x300?text=Cats',
  birds: 'https://via.placeholder.com/400x300?text=Birds',
  accessories: 'https://via.placeholder.com/400x300?text=Accessories',
};

export default function CategoryPage({ params }: Props) {
  const image = images[params.category] || 'https://via.placeholder.com/400x300';
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mb-4 capitalize">{params.category}</h1>
      <img src={image} alt={params.category} className="mx-auto rounded" />
    </div>
  );
}
