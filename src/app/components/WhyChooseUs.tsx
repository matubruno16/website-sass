import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import SpinIconos from "./SpinIconos";
import Button from "./Button";

export default function WhyChooseUs() {
  const t = useTranslations("Home.WhyChooseUs");
  return (
    <section className="bg-whyChooseUs w-full h-full md:h-[969px] -translate-y-20 overflow-hidden">
      <div className="grid md:grid-cols-2 justify-center w-[90%] md:w-[2/3] max-w-[1200px] h-full md:h-[500px] place-items-center mx-auto pt-44 text-center md:text-start">
        <div className="flex flex-col justify-start items-start h-full p-10 mt-6">
          <h2 className="text-4xl md:text-2xl font-semibold text-text-primario text-pretty ">
            {t("title")}
          </h2>
          <p className="text-text-secundario text-pretty mt-4">
            {t("subtitle")}
          </p>
          <div className="w-full flex pt-10 gap-6">
            <div className="flex w-1/2 flex-col">
              <Image
                src="/escudo.svg"
                alt=""
                width={94}
                loading="lazy"
                height={44}
              />
              <h2 className="text-xl font-semibold text-text-primario mt-2">
                {t("heeaderIcon1")}
              </h2>
              <p className="text-text-secundario text-sm text-pretty">
                {t("parrafparagraphIcon1")}
              </p>
            </div>
            <div className="flex w-1/2 flex-col mb-12">
              <Image
                src="/altavoz.svg"
                alt=""
                width={75}
                loading="lazy"
                height={44}
              />
              <h2 className="text-xl font-semibold text-text-primario mt-2">
                {t("heeaderIcon2")}
              </h2>
              <p className="text-text-secundario text-sm text-pretty">
                {t("parrafparagraphIcon2")}
              </p>
            </div>
          </div>
          <Button text="btn-whyChooseUs" />
        </div>
        <div className="bg-[#EBEBEB] w-full h-full rounded-[30px] flex flex-col items-center justify-center opacity-90">
          <SpinIconos />
        </div>
      </div>
    </section>
  );
}
