import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Header() {
  const t = useTranslations('Home.Header')

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
            <a href="#">{t('solutions')}</a>
          </li>
          <li>
            <a href="#">{t('industries')}</a>
          </li>
          <li>
            <a href="#">{t('products')}</a>
          </li>
          <li>
            <a href="#">{t('resources')}</a>
          </li>
          <li>
            <a href="#">{t('prices')}</a>
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
