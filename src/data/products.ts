export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Dog Bone',
    price: 4.99,
    category: 'dogs',
    image: '/images/products/dog-bone.jpg',
    description: 'Chewy bone for dogs.',
    rating: 4,
  },
  {
    id: 2,
    name: 'Cat Toy',
    price: 3.5,
    category: 'cats',
    image: '/images/products/cat-toy.jpg',
    description: 'Fun toy for cats.',
    rating: 5,
  },
];
