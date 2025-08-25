import { products } from "@/data/products.js";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/app/components/AddToCart";


export default async function ProductPage({params}) {
  const { id } = params;
  const product = products.find((p) => String(p.id) === params.id); 

  if (!product) {
    return <h1 className="text-center text-red-500">Producto no encontrado</h1>;
  }
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Image src={product.src} alt={product.title} className="w-full h-64 object-contain rounded-lg" width={200} height={200}/>
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <AddToCartButton productId={id} />
      </div>
      <p className="text-gray-700 mt-2">{product.text}</p>
      <p className="text-2xl font-semibold mt-4">${product.price}</p>
      <p>Stock: {product.stock}</p>
      <div className="pt-10 gap-4 flex flex-col">
        <h3 className="text-3xl underline">Más información</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
} 