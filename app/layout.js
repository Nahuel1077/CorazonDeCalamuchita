'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { CartProvider } from "./context/CartContext";
import NavCart from "./components/NavCart";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";


const roboto = Roboto({
subsets: ['latin'],
})

/* export const metadata = {
  title: "Corazón de Calamuchita | ",
  description: "Tienda e-commerce, productos regionales",
}; */

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
    useEffect(() => {
      const pageTitles = {
        "/": "Corazón de Calamuchita | Productos regionales",
        "/#contacto": "Contacto | Corazón de Calamuchita",
        "/products": "Productos | Corazón de Calamuchita",
        "/nosotros": "Nosotros | Corazón de Calamuchita",
        "/carrito": "Carrito | Corazón de Calamuchita",
        };
  
      document.title = pageTitles[pathname] || "Corazón de Calamuchita";
    }, [pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }


  return (
    <html lang="en">
      <body className={roboto.className}>
       <CartProvider>
          <nav className="flex flex-row w-full justify-around shadow-md sticky top-0 bg-[linear-gradient(0deg,_#ededed,_#ffffff)] z-20">
            <Link href="/">
              <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-[50px] h-[50px] sm:w-auto sm:h-auto"
              />
            </Link>
            <ul className="justify-around flex-row items-center gap-8 hidden sm:flex">
              <li><Link href="/products">Productos</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/#contacto">Contacto</Link></li>
              <li><Link href="/carrito" className="flex flex-row"><Image src="/logos/cart.svg" alt="logo carrito" width={20} height={20}></Image><NavCart/></Link></li>
            </ul>
            

            <div className="sm:hidden flex items-center">
        <button onClick={toggleNav}>
          <Image
            className=""
            src="/logos/menu.svg"
            alt="menu icon"
            width={50}
            height={50}
          />
        </button>
      </div>

      {/* desplegable mobile*/}
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-white text-black sm:hidden drop-shadow-lg">
          <ul className="flex flex-col items-end gap-4 p-4">
            <li><Link href="/products" onClick={toggleNav}>Productos</Link></li>
              <li><Link href="/nosotros" onClick={toggleNav}>Nosotros</Link></li>
              <li><Link href="/#contacto" onClick={toggleNav}>Contacto</Link></li>
              <li><Link href="/carrito" onClick={toggleNav}className="flex flex-row"><Image src="/logos/cart.svg" alt="logo carrito" width={20} height={20}></Image><NavCart/></Link></li>
          </ul>
        </div>
      )}
          </nav>        
            {children}
          <footer className="flex flex-col content-center sm:flex-row w-full items-start justify-evenly flex-wrap shadow-[0px_-2px_4px_-3px] p-8 gap-12 bg-[linear-gradient(180deg,_#ededed,_#ffffff)]">
            <div>
                <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              />
            </div>
            <div className="gap-4 flex flex-col">
              <h6 className="underline text-xl">Productos</h6>
              <ul>
                <li>Aderezos</li>
                <li>Bebidas</li>
                <li>Especias</li>
                <li>Regionales</li>
              </ul>
            </div>
            <div className="gap-4 flex flex-col">
              <h6 className="underline text-xl">Recursos</h6>
              <ul>
                <li><Link href="/#contacto">Contacto</Link></li>
                <li>Preguntas frecuentes</li>
                <li>Políticas de privacidad</li>
              </ul>
            </div>
          </footer>
   </CartProvider>
      </body>
    </html>
  );
}
