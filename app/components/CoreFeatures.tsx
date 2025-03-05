import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function CoreFeatures() {
  const t = await getTranslations("Home.CoreFeatures");
  return (
    <section className="overflow-hidden w-full h-full">
      <div className="bg-coreFeatures w-screen h-full md:h-[769px] grid place-items-center">
        <div className="grid md:grid-cols-2 justify-center w-[90%] md:w-[2/3] max-w-[1200px] h-full md:h-[500px] place-items-center mx-10 text-center md:text-start">
          <div className=" hidden bg-[#EBEBEB] w-full h-full rounded-[30px] md:flex flex-col items-center p-6 overflow-hidden">
            <Image
              className=""
              src="/analytics.png"
              width={600}
              height={239}
              loading="lazy"
              alt="Graficos analiticos"
            />
            <div className="w-full flex items-center justify-between gap-2 my-2">
              <Image
                src="/nuber.png"
                width={280}
                height={80}
                loading="lazy"
                alt="Number of Leads"
              />
              <Image
                className="hidden lg:block"
                src="/grafic.png"
                width={160}
                height={160}
                loading="lazy"
                alt="Grafico circular"
              />
            </div>
            <Image
              src="/task.png"
              width={600}
              height={200}
              loading="lazy"
              alt="Task Assigned To Me"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-start items-start h-full p-4 md:p-10 mt-6">
            <h2 className="text-4xl font-bold text-pretty ml-0 md:ml-8 ">
              {t("title")}
            </h2>
            <p className="text-pretty mt-4 ml-0 md:ml-8">
              {t("subtitle")}
            </p>
            <div className=" ">
              <div className="flex flex-col md:flex-row items-center gap-3 mt-10 md:mt-24">
                <Image
                  src="/punto.png"
                  loading="lazy"
                  alt="Icono Punto"
                  className="hidden md:flex"
                  width={16}
                  height={16}
                />
                <h3 className="w-full  text-2xl md:text-xl font-semibold">
                  {t("headerGrafics1")}
                </h3>
              </div>
              <div>
                <p className="ml-7">{t("description1")}</p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col md:flex-row items-center gap-3 mt-10 md:mt-14">
                <Image
                  src="/punto.png"
                  loading="lazy"
                  alt="Icono Punto"
                  className="hidden md:flex"
                  width={16}
                  height={16}
                />
                <h3 className="w-full text-2xl md:text-xl font-semibold">
                  {t("headerGrafics2")}
                </h3>
              </div>
              <div>
                <p className="ml-7">{t("description2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
