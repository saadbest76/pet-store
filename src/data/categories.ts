export interface Category {
  slug: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    slug: 'dogs',
    name: 'Dogs',
    image: '/images/categories/dogs.jpg',
  },
  {
    slug: 'cats',
    name: 'Cats',
    image: '/images/categories/cats.jpg',
  },
  {
    slug: 'birds',
    name: 'Birds',
    image: '/images/categories/birds.jpg',
  },
];
