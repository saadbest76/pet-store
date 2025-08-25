'use client';

import { createContext, useContext, useReducer, useState, ReactNode } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

type CartAction =
  | { type: 'add'; product: Product; quantity: number }
  | { type: 'remove'; id: string }
  | { type: 'update'; id: string; quantity: number }
  | { type: 'clear' };

function reducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'add': {
      const existing = state.find((i) => i.product.id === action.product.id);
      if (existing) {
        return state.map((i) =>
          i.product.id === action.product.id
            ? { ...i, quantity: i.quantity + action.quantity }
            : i
        );
      }
      return [...state, { product: action.product, quantity: action.quantity }];
    }
    case 'remove':
      return state.filter((i) => i.product.id !== action.id);
    case 'update':
      return state.map((i) =>
        i.product.id === action.id ? { ...i, quantity: action.quantity } : i
      );
    case 'clear':
      return [];
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, quantity: number) => void;
  clear: () => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, [] as CartItem[]);
  const [isOpen, setOpen] = useState(false);

  const addItem = (product: Product, quantity = 1) =>
    dispatch({ type: 'add', product, quantity });
  const removeItem = (id: string) => dispatch({ type: 'remove', id });
  const updateItem = (id: string, quantity: number) =>
    dispatch({ type: 'update', id, quantity });
  const clear = () => dispatch({ type: 'clear' });

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateItem, clear, isOpen, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
