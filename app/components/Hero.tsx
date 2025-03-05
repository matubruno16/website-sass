import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Button from "./Button";
export default async function Hero() {
  const t = await getTranslations("Home.Hero");
  return (
    <section className="bg-heading h-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto h-full flex flex-col md:ml-[5%] lg:ml-40 mt-40 overflow-hidden text-center md:text-start px-2 md:px-0">
        <h1 className=" text-5xl  md:text-6xl font-semibold text-pretty leading-[3.8rem] md:w-[590px] ">
          {t("title")}
        </h1>
        <div className="text-2xl my-4 md:w-[590px]">
          <p className="text-balance">{t("subtitle")}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 text-lg font-semibold mt-6 md:mb-20 ">
          <Button text={t("link")} url="/contact" />
        <Image
          className=" md:ml-40"
          src="/star5.png"
          alt="Certificacion 5 estrellas"
          width={300}
          height={200}
          loading="lazy"
        />
        </div>
      </div>
    </section>
  );
}
