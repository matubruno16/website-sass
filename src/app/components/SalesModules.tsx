import { useTranslations } from "next-intl";
import React from "react";
import Button from "./Button";
import ModulSales from "./ModulSales";

export default function SalesModules() {
  const t = useTranslations("Home.SalesModules");
  return (
    <section className="w-full grid place-content-center">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-text-primario">
          {t("title")}
        </h2>
        <p className="text-text-secundario text-pretty w-2/4 mx-auto text-center mt-2">
          {t("subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-3 my-10 py-10 max-w-[1200px]  border-dashed border-2 border-aro rounded-[40px] mx-10 ">
        <div className="flex flex-col w-full items-center ">
          <Button text="btn-InNeed" />
          <div className=" pt-8" >
            <ModulSales
              srcImg="/Icon.svg"
              altImg="Icono Descuento"
              title="Sales"
              subtitle="Unique and powerful suite sale run your entire business"
            />
            <ModulSales
              srcImg="/Icon-1.svg"
              altImg="Icono Altavoz"
              title="Marketing"
              subtitle="Unique and powerful suite sale 
              run your entire business"
            />
            <ModulSales
              srcImg="/Icon-2.svg"
              altImg="Icono Service"
              title="Service"
              subtitle="Unique and powerful suite sale 
              run your entire business"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <Button text="btn-Industry" />
          <div className=" pt-8">
            <ModulSales
              srcImg="/Icon-3.svg"
              altImg="Icono Automotive"
              title="Automotive"
              subtitle="Unique and powerful suite sale 
              run your entire business"
            />
            <ModulSales
              srcImg="/Icon-4.svg"
              altImg="Icono Real estate"
              title="Real estate"
              subtitle="Unique and powerful suite sale 
              run your entire business"
            />
            <ModulSales
              srcImg="/Icon-5.svg"
              altImg="Icono Education"
              title="Education"
              subtitle="Unique and powerful suite sale 
              run your entire business"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-center ">
          <Button text="btn-Solution" />

          <div className=" pt-8">
            <ModulSales
              srcImg="/Icon-6.svg"
              altImg="Icono Project Management"
              title="Project Management"
              subtitle="Unique and powerful suite sale 
              run your entire business"
            />
            <ModulSales
              srcImg="/Icon-7.svg"
              altImg="Icono Delivery Management"
              title="Delivery Management"
              subtitle="Unique and powerful suite sale 
              run your entire business"
            />
            <ModulSales
              srcImg="/Icon-8.svg"
              altImg="Icono Loyalty Management"
              title="Loyalty Management"
              subtitle="Unique and powerful suite sale 
              run your entire business"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
