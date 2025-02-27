import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const t = await getTranslations("Home.Header");

  return (
    <header className=" w-full absolute bg-transparent flex items-center justify-between pt-2 px-10 mx-auto">
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
            <Link href="/es" className="flex items-center">{t("es")}
              <img src="../es.png" alt="bandera españa" width={28} height={28} className="ml-2" />
            </Link>
          </li>
          <li>
            <Link href="/en" className="flex items-center">
              {t("en")} 
              <img src="../en.png" alt="bandera inglesa" width={28} height={28} className="ml-2" />
            </Link>
          </li>
          <li>
            <Link href="/pt" className="flex items-center">
              {t("pt")} 
              <img src="../pt.png" alt="bandera portuguesa" width={28} height={28} className="ml-2" />
            </Link>
          </li>
        </ul>
      </nav>
      <Image
        className="md:hidden cursor-pointer"
        src="/icons-menu.png"
        alt="Icono menu"
        width={36}
        height={36}
      />
    </header>
  );
}
