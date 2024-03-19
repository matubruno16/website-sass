import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const t = useTranslations('Home.Header')

  return (
    <header className=" w-full absolute bg-transparent flex items-center justify-between mt-2.5 px-10 mx-auto">
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
            <Link
             href="/">Inicio</Link>
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
            <Link href="/blog" className="bg-btn px-8 py-2 rounded-md text-white" >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <Image className="md:hidden cursor-pointer" src="/icons-menu.png" alt="Icono menu" width={36} height={36}/>
    </header>
  );
}
