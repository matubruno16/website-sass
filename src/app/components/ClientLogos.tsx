import { useTranslations } from "next-intl";
import React from "react";
import SliderClientes from "./SliderClientes";

export default function ClientLogos() {
  const t = useTranslations("Home.ClientLogos");
  return (
    <section className="w-full h-full -translate-y-40">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-text-primario">
          {t("title")}
        </h2>
        <p className="text-text-secundario text-pretty w-2/4 mx-auto text-center mt-2">
          {t("subtitle")}
        </p>
      </div>
      <SliderClientes />
    </section>
  );
}
