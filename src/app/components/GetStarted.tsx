import { useTranslations } from "next-intl";
import React from "react";

export default function GetStarted() {
  const t = useTranslations("GetStarted");
  return (
    <a
      href="#"
      className="flex bg-btn w-[10rem] h-[2.75rem] rounded-md text-white justify-center items-center"
    >
      {t("btn")}
    </a>
  );
}
