import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  text: string;
  url?: string;
}
export default function Button({ text, url }: Props) {
  const t = useTranslations("Buttons");
  return (
    <a
      href={url}
      className="flex bg-btn w-[10rem] h-[2.75rem] rounded-md text-white justify-center items-center"
    >
      {t(text)}
    </a>
  );
}
