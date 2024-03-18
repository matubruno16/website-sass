import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  text: any;
}
export default function Button({ text }: Props) {
  const t = useTranslations("Home.Buttons");
  return (
    <a
      href="#"
      className="flex bg-btn w-[10rem] h-[2.75rem] rounded-md text-white justify-center items-center"
    >
      {t(text)}
    </a>
  );
}
