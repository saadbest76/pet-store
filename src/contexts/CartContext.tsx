"use client";
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import type { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

type Action =
  | { type: 'add'; product: Product; quantity?: number }
  | { type: 'remove'; id: number }
  | { type: 'updateQty'; id: number; quantity: number }
  | { type: 'clear' };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find(i => i.product.id === action.product.id);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + (action.quantity || 1) }
              : i,
          ),
        };
      }
      return {
        items: [...state.items, { product: action.product, quantity: action.quantity || 1 }],
      };
    }
    case 'remove':
      return { items: state.items.filter(i => i.product.id !== action.id) };
    case 'updateQty':
      return {
        items: state.items.map(i =>
          i.product.id === action.id ? { ...i, quantity: action.quantity } : i,
        ),
      };
    case 'clear':
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue extends CartState {
  add: (product: Product, quantity?: number) => void;
  remove: (id: number) => void;
  updateQty: (id: number, quantity: number) => void;
  clear: () => void;
  totalQty: number;
  subtotal: number;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart');
      if (stored) return JSON.parse(stored) as CartState;
    }
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state]);

  const value: CartContextValue = {
    ...state,
    add: (product, quantity) => dispatch({ type: 'add', product, quantity }),
    remove: id => dispatch({ type: 'remove', id }),
    updateQty: (id, quantity) => dispatch({ type: 'updateQty', id, quantity }),
    clear: () => dispatch({ type: 'clear' }),
    totalQty: state.items.reduce((sum, i) => sum + i.quantity, 0),
    subtotal: state.items.reduce((sum, i) => sum + i.quantity * i.product.price, 0),
    total: state.items.reduce((sum, i) => sum + i.quantity * i.product.price, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
