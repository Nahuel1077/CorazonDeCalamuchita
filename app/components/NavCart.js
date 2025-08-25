"use client";

import { useCart } from "../context/CartContext";

export default function NavCart() {
  const { items } = useCart();
  if (items.length > 0) {
    return <p className="p-1">{items.length}</p>;
  }
}
