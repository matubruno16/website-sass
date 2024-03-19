
import { useTranslations } from "next-intl";
import React from "react";

export default function Blog() {
  const t = useTranslations('Blog')
  return (
    <main className="w-screen pt-24 ">
        
        <h1 className="w-full flex items-center justify-center text-text-primario text-6xl font-semibold">{t('title')}</h1>
        

        
    </main>
  );
}
