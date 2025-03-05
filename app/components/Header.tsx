import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const t = await getTranslations("Home.Header");

  return (
    <header className="w-full bg-blue-100/40 backdrop-blur  absolute">
  <div className="flex w-full items-center justify-between py-2 px-10 mx-auto z-50">
    <Image
      className="w-40 md:w-[200px] lg:w-[260px]"
      src="/logo.png"
      alt="Logo"
      width={260}
      height={55}
      priority
    />
    <nav className="flex flex-col items-center justify-between font-semibold text-sm">
      <ul className="flex gap-2 md:gap-4 lg:gap-8 items-center">
        <li>
          <Link href="/es" className="flex items-center">
            <span className="hidden md:block">{t("es")}</span>
            <Image src="/es.png" alt="bandera española" width={28} height={28} className="ml-2" />
          </Link>
        </li>
        <li>
          <Link href="/en" className="flex items-center">
            <span className="hidden md:block">{t("en")} </span>
            <Image src="/en.png" alt="bandera inglesa" width={28} height={28} className="ml-2" />
          </Link>
        </li>
        <li>
          <Link href="/pt" className="flex items-center">
            <span className="hidden md:block">{t("pt")} </span>
            <Image src="/pt.png" alt="bandera portuguesa" width={28} height={28} className="ml-2" />
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>

  );
}
