"use client";

import { products } from "@/data/products";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToCart = (slug) => {
    setItems((prev) => {
      const addId = products.find(p => String(p.id) === slug); 
        if (!addId) {
        console.error("Producto no encontrado:", slug);
        return prev;
        }
      const existing = prev.find((i) => i.slug === slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: i.qty + 1 } : i
      );
    }
    console.log(addId.price);
    console.log(addId.title);
    console.log(addId.stock);
    console.log(addId.src);
    return [...prev, { ...addId, qty: 1 }];
    });
    alert("Producto añadido al carrito");
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== Number(id)));
    alert("Producto eliminado del carrito");
  };

  const totalQty = items.reduce((sum, i) => sum + (i.qty || 0), 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, totalQty}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
