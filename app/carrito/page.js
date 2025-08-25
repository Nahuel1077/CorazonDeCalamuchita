"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { products } from "@/data/products";

export default function CarritoPage() {
  const { items, removeFromCart } = useCart();

  if (items.length === 0) {
    return <p className="pb-40 pt-40 lg:p-85">Tu carrito está vacío 🛒</p>;
  }

  const calculateTotal = () => {
    const total = items.reduce((sum, item) => {
      return sum + item.price * item.qty;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Tu carrito</h1>
        <ul className="flex flex-col gap-8">
          {items.map((i) => (
            <li key={i.id} className="flex flex-row gap-6">
              <div className="flex flex-col">
                <Image
                    src={i.src}
                    height={50}
                    width={50}
                    alt="logo"
                    className="object-contain"
                    />
                <h2 className="text-xl font-semibold">{i.title}</h2>
                <p>Id: {i.id}</p> 
                <p>Cantidad: {i.qty}</p>
                <p>Stock: {i.stock}</p>
                <p>Precio unitario: ${i?.price}</p>
                <p>Total: ${i?.price * i.qty}</p>
              </div>
              <button onClick={() => removeFromCart(i.id)} className="h-[20px] w-[20px]">❌</button>
            </li>
          ))}
        </ul>    
    </div>
    <div className="flex flex-col gap-4 items-end p-8">
          <p className="text-xl font-semibold">Total: ${calculateTotal()}</p>
          <button type="button" className="h-[30px] w-[80px] bg-amber-500 shadow-[1px_1px_5px_0px] text-lg font-bold rounded-lg hover:shadow-xl">Comprar</button>
    </div>
  </div>
  );
}
