export default function RatingStars({ value }: { value: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={i <= Math.round(value) ? 'text-yellow-400' : 'text-gray-300'}
        width={20}
        height={20}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.358 2.442a1 1 0 00-.364 1.118l1.286 3.949c.3.921-.755 1.688-1.54 1.118l-3.358-2.442a1 1 0 00-1.175 0l-3.358 2.442c-.784.57-1.838-.197-1.539-1.118l1.285-3.949a1 1 0 00-.364-1.118L2.075 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
}
