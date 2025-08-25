import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  image: string;
  href: string;
}

export default function CategoryCard({ title, image, href }: Props) {
  return (
    <Link href={href} className="block border rounded-lg overflow-hidden hover:shadow-lg">
      <Image src={image} alt={title} width={300} height={200} className="object-cover" />
      <div className="p-4 text-center font-medium">{title}</div>
    </Link>
  );
}
