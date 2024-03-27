// En CardPageBlog.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";
import PageBlog from "@/interfaces/pageBlog";

export default function CardPageBlog({
  srcImg,
  altImg,
  title,
  description,
  fecha,
  slug,
  tag,
  autor
}: PageBlog) {
  
  return (
    <article 
      className="w-full max-w-[500px] rounded-3xl overflow-hidden bg-slate-200">
      <figure>
        <Image
          src={srcImg}
          alt={altImg}
          className="bg-center bg-no-repeat bg-cover overflow-hidden h-[300px] object-cover"
          loading="lazy"
          width={800}
          height={250}
        />
      </figure>
      <div className="px-8 pt-3 pb-6 flex flex-col ">
        <div className="flex items-center pl-6 pb-4">
          <Image
            src="/date.svg"
            alt="Icono fecha publicacion"
            width={20}
            height={25}
          />
          <p className="pl-2 pr-4">
            {new Date(fecha).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
            <p>{autor}</p>
          <h3 className="w-min h-7 px-6 flex items-center bg-slate-400 text-text-primario font-semibold rounded-3xl text-nowrap ">
            {tag}
          </h3>
        </div>
        <h2 className="text-3xl text-text-primario font-semibold text-pretty">
          {title}
        </h2>
        <p className="text-text-secundario pb-4">{description}</p>

        <Link
          className="flex bg-btn w-[10rem] h-[2.75rem] rounded-md text-white justify-center items-center "
          href={`/blog/${slug}`}
        >
          Leer Mas
        </Link>
      </div>
    </article>
  );
}
