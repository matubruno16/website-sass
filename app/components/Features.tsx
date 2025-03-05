import React from "react";
import CardFeatures from "./CardFeatures";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Home.Features");
  return (
    <section className="max-w-[1440px] w-full h-full my-20 mx-auto">
      <div className="text-center w-[90%] mx-auto ">
        <h2 className="font-semibold text-3xl text-center mb-4">
          {t("title")}
        </h2>
        <h3 className="w-full md:w-2/3 lg:w-1/2 mx-auto mb-6">
          {t("subtitle")}
        </h3>
      </div>
      <section className="flex mx-auto items-center justify-center gap-8 flex-wrap px-6">
        <CardFeatures
          src="/config.png"
          titulo={t("card1.title")}
          descripcion={t("card1.subtitle")}
        />
        <CardFeatures
          src="/user.png"
          titulo={t("card2.title")}
          descripcion={t("card2.subtitle")}
        />
        <CardFeatures
          src="/check.png"
          titulo={t("card3.title")}
          descripcion={t("card3.subtitle")}
        />
      </section>
    </section>
  );
}
