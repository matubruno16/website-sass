"use client";
import Link from "next/link";
import Button from "./Button";


export default function DropdownCategorias({
  categorias,
}: {
  categorias: string[];
}) {
  return (
    <div>
      {categorias.map((categoria, index) => (
        <Link key={index} href={`/categorias/${categoria}`}>
          <h2>
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </h2>
        </Link>
      ))}
    </div>
  );
}
