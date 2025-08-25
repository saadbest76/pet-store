"use client";
import React from 'react';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const QuantityInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Decrease quantity"
        className="rounded border px-2"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        min={1}
        onChange={e => onChange(Math.max(1, Number(e.target.value)))}
        className="w-12 rounded border text-center"
      />
      <button
        aria-label="Increase quantity"
        className="rounded border px-2"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
