'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products.js";
import Contacto from "./contacto/page";

const carrousel = [
  {id:1, src:"/pimienta.jpg", title:"Pimienta negra", price:2500},
  {id:2, src:"/yerba.jpg", title:"Yerba artesanal", price:5500},
  {id:3, src:"/licor.jpg", title:"Licor artesanal mandarina", price:5000},
];



export default function Home() {

  const [carrouselImage, setCarrouselImage] = useState(0);

  function handleNext() {
    setCarrouselImage((prev) => (prev + 1) % carrousel.length);
  }

  function handlePrevious() {
    setCarrouselImage((prev) => (prev - 1 + carrousel.length) % carrousel.length);
  }

  const current = carrousel[carrouselImage];

  return (
    <section className="flex flex-col items-center w-full pt-8 pb-8 gap-10">
      <div id="carrousel" className="flex flex-col w-full items-center transition gap-8">
        <div className="flex flex-col items-center w-full">
          <Image
          src={current.src}
          alt="example"
          width={500}
          height={500}
          />
          <h6>{current.title}</h6>
          <h4 className="text-3xl text-center">${current.price}</h4>
          <button onClick={handleNext}>
            <Image
            src="/logos/right.svg"
            alt="right arrow"
            width={20}
            height={20}
            className="absolute right-[30%] top-[40%]"
            />
          </button>
          <button onClick={handlePrevious}>
            <Image
            src="/logos/left.svg"
            alt="left arrow"
            width={20}
            height={20}
            className="absolute left-[30%] top-[40%]"
            />
          </button>
        </div>
        <Link href="/products"><h3>Mira todas nuestras ofertas</h3></Link>
      </div>
      <div>
          <h1 className="underline text-yellow-600 text-center text-4xl">Más vendidos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center hover:outline">
                <Link key={product.id} href={`/products/${product.id}`}>
                  <h3 className="text-center text-3xl">{product.title}</h3>
                  <Image
                    src={product.src}
                    width={200}
                    height={200}
                    alt={product.alt}
                    className="object-contain"
                  />
                  <h6 className="text-center">{product.text}</h6>
                  <h4 className="text-center text-2xl">${product.price}</h4>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div className="flex lg:flex-row flex-col md:justify-center w-full gap-8">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl">Somos productores</h2>
          <ul className="list-disc">
            <li>Hacemos nuestros productos artesanalmente</li>
            <li>Nos respaldan 30 años de trayectoria</li>
            <li>Tenemos clientes a nivel global</li>
            <li>Ventas mayoristas y minoristas</li>
          </ul>
          <Image
          src="/logos/manufacturer.svg"
          alt="global logo"
          width={80}
          height={80}
          className="self-center"
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-3xl">Más de 30 años en el mercado</h2>
          <ul className="list-disc">
            <li>Lideramos el mercado en zona Calamuchita</li>
            <li>Calidad de excelencia</li>
            <li>Nos especializamos en productos regionales</li>
            <li>Siempre innovamos y marcamos tendencias</li>
          </ul>
          <Image
          src="/logos/market.svg"
          alt="global logo"
          width={80}
          height={80}
          className="self-center contrast-200"
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-3xl">Envíos a todo el mundo</h2>
          <ul className="list-disc">
            <li>Cerca del 40% de ganancias son gracias a pedidos</li>
            <li>Tenemos clientes internacionales</li>
            <li>Los mejores restaurantes usan nuestros productos</li>
            <li>¿Qué esperas para hacer tu pedido?</li>
          </ul>
          <Image
          src="/logos/localization.svg"
          alt="global logo"
          width={80}
          height={80}
          className="self-center"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Image
        src="/portada2.png"
        width={500}
        height={300}
        alt="portada"
        className="sm:w-[80vw] sm:h-[700px] w-full h-auto object-cover brightness-[0.5]"
        />
        <div className="flex justify-center items-center sm:absolute sm:w-[80vw] sm:h-[600px]">
          <p className="sm:text-4xl sm:text-amber-100 text-black font-serif">¡Vení a conocer nuestro local!</p>
        </div>
      </div>
      <Contacto id="contacto"/>
    </section>
  );
}
