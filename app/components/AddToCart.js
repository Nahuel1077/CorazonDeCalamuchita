'use client'
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function AddToCartButton({ productId }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(productId)}
      className="mt-4 px-4 py-2 text-white border-solid border-black border-[1px] hover:shadow-xl rounded"
    >
      <Image
        src="/logos/cart.svg"
        alt="logo carrito"
        width={50}
        height={50}
      />
    </button>
  );
}