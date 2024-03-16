import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import SpinIconos from "./SpinIconos";
import GetStarted from "./GetStarted";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");
  return (
    <section className="bg-whyChooseUs w-screen h-full md:h-[769px] -translate-y-20 grid place-items-center">
      <div className="">
        <div className="grid md:grid-cols-2 justify-center w-[90%] md:w-[2/3] max-w-[1200px] h-full md:h-[500px] place-items-center mx-10 text-center md:text-start">
          <div className="flex flex-col justify-start items-start h-full p-10 mt-6">
            <h2 className="text-4xl md:text-2xl font-semibold text-text-primario text-pretty ">
              {t("title")}
            </h2>
            <p className="text-text-secundario text-pretty mt-4">
              {t("subtitle")}
            </p>
            <div className="w-full flex pt-10 gap-6">
              <div className="flex w-1/2 flex-col">
                <Image src="/escudo.png" alt="" width={94} height={44} />
                <h2 className="text-xl font-semibold text-text-primario">
                  {t("heeaderIcon1")}
                </h2>
                <p className="text-text-secundario text-sm">
                  {t("parrafparagraphIcon1")}
                </p>
              </div>
              <div className="flex w-1/2 flex-col mb-12">
                <Image src="/altavoz.png" alt="" width={75} height={44} />
                <h2 className="text-xl font-semibold text-text-primario">
                  {t("heeaderIcon2")}
                </h2>
                <p className="text-text-secundario text-sm">
                  {t("parrafparagraphIcon2")}
                </p>
              </div>
            </div>
            <GetStarted />
          </div>
          <div className="bg-[#EBEBEB] w-full h-full rounded-[30px] flex flex-col items-center justify-center">
            <SpinIconos />
          </div>
        </div>
      </div>
    </section>
  );
}
