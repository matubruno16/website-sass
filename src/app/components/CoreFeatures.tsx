import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function CoreFeatures() {
  const t = useTranslations('CoreFeatures')
  return (
    <section className="overflow-hidden">
      <div className="bg-coreFeatures w-screen h-[769px] mb-10 grid place-items-center">
        <div className="grid md:grid-cols-2 justify-center w-[2/3] max-w-[1200px] h-[500px] place-items-center mx-10 text-center md:text-start">
          <div className=" hidden bg-[#EBEBEB] w-full h-full rounded-[30px] md:flex flex-col items-center p-6">
            <Image
              className=""
              src="/analytics.png"
              width={600}
              height={239}
              alt="Graficos analiticos"
            />
            <div className="w-full flex items-center justify-between gap-2 my-2">
              <Image
                src="/nuber.png"
                width={280}
                height={80}
                alt="Number of Leads"
              />
              <Image
                src="/grafic.png"
                width={160}
                height={160}
                alt="Grafico circular"
              />
            </div>
            <Image
              src="/task.png"
              width={600}
              height={200}
              alt="Task Assigned To Me"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-start items-start h-full p-10 mt-6">
            <h2 className="text-4xl md:text-2xl font-semibold text-text-primario text-pretty">
              {t('title')}  
            </h2>
            <p className="text-text-secundario text-pretty">
            {t('subtitle')}  
            </p>
            <div className=" ">
              <div className="flex flex-col md:flex-row items-center gap-3 mt-24">
                <Image
                  src="/punto.png"
                  alt="Icono Punto"
                  className="hidden md:flex"
                  width={16}
                  height={16}
                />
                <h3 className="w-full  text-2xl md:text-xl text-text-primario font-semibold">
                {t('headerGrafics1')}  
                </h3>
              </div>
              <div>
                <p className="ml-7">
                  {t('description1')}
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col md:flex-row items-center gap-3 mt-14">
                <Image
                  src="/punto.png"
                  alt="Icono Punto"
                  className="hidden md:flex"
                  width={16}
                  height={16}
                />
                <h3 className="w-full text-2xl md:text-xl text-text-primario font-semibold">
                  {t('headerGrafics2')}
                </h3>
              </div>
              <div>
                <p className="ml-7">
                 {t('description2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}