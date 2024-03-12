import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="max-w-[1440px] mx-auto bg-transparent flex items-center justify-between mt-2.5 px-10">
      <Image
        className="w-40 md:w-[200px] lg:w-[260px]"
        src="/logo.png"
        alt="Logo"
        width={260}
        height={55}
        priority
      />
      <nav className=" hidden md:flex flex-col items-center justify-between font-semibold text-sm ">
        <ul className="flex gap-2 md:gap-4 lg:gap-8 items-center">
          <li>
            <a href="#">Soluciones</a>
          </li>
          <li>
            <a href="#">Industrias</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Recursos</a>
          </li>
          <li>
            <a href="#">Precios</a>
          </li>
          <li>
            <button className="bg-btn px-8 py-2 rounded-md text-white">
              Login
            </button>
          </li>
        </ul>
      </nav>
      <Image className="md:hidden cursor-pointer" src="/icons-menu.png" alt="Icono menu" width={36} height={36}/>
    </header>
  );
}
