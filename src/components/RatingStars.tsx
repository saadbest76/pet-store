import React from 'react';

interface Props {
  rating: number;
}

const RatingStars: React.FC<Props> = ({ rating }) => {
  return (
    <div aria-label={`Rating: ${rating} out of 5`} className="text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

export default RatingStars;
