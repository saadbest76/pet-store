'use client';

export default function QuantityInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center border rounded w-24">
      <button className="flex-1 p-1" onClick={() => onChange(Math.max(1, value - 1))}>
        -
      </button>
      <span className="flex-1 text-center">{value}</span>
      <button className="flex-1 p-1" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}
