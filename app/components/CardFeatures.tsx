import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  titulo: string;
  descripcion: string;
}

export default function CardFeatures({ src, titulo, descripcion }: Props) {
  return (
    <div className="bg-[#EBEBEB] w-[24rem] h-[15rem] rounded-lg overflow-hidden mt-4 p-7 shadow-lg hover:rotate-6 hover:transition-all duration-500">
      <Image
        src={`${src}`}
        alt={`Icono ${src} `}
        width={60}
        height={60}
        loading="lazy"
        style={{ objectFit: "cover", width: "auto", height: "auto" }}
      />
      <h2 className="text-3xl font-semibold mt-4 mb-2">
        {titulo}
      </h2>
      <p className="text-pretty">{descripcion}</p>
    </div>
  );
}
