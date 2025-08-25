'use client'
import { products } from "@/data/products.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const category = formData.get("category");
    setSelectedCategory(category);
  };
  const filteredProducts =
    selectedCategory === "" 
      ? products 
      : products.filter((p) => p.category === selectedCategory);

  return( 
   <div className="flex flex-col sm:flex-row gap-4 w-full justify-around p-[100px]">
    <form className="flex flex-col gap-18 items-start" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category">
          <option value="">Todas</option>
          <option value="aderezos">Aderezos</option>
          <option value="bebidas">Bebidas</option>
          <option value="especias">Especias</option>
          <option value="regionales">Regionales</option>
        </select>
      </div>
      <input type="submit" value="Filtrar" className="border bg-gray-300 rounded-sm w-[60px]"/>
      </form>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:p-6">
      {filteredProducts.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className="border rounded-xl p-4 hover:shadow-lg transition">
            <Image src={product.src} alt={product.title} className="w-[200px] h-auto object-cover rounded-lg" width={400} height={400}/>
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}
