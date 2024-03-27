import CardPageBlog from "@/app/components/CardPageBlog";
import DropdownCategorias from "@/app/components/DropdownCategoris";
import { client } from "@/app/lib/client";
import { baseLocale } from "@/i18n";
import Post from "@/interfaces/post";
import { Metadata } from "next/types";
 
export const dynamic = "auto",
  fetchCache = "auto",
  revalidate = 10;

export const metadata: Metadata = {
  title: "Entradas del Blog de Memoria Studio",
  description:
    "Aca vas a encontrar todas las entradas del blog de Memoria Studio",
};


export default async function Blog() {
  const response = await client.getEntries({
    locale: baseLocale,
    content_type: "blog",
  });
  
  const posts: Post[] = response.items ?? [];
  const categoriasArray = response.items.map((post: Post) => {
    return post.fields.tags;
  });
  const categoriasFlat = categoriasArray.flat();

  const categoriasUnicas = [
    ...(new Set(categoriasFlat) as typeof categoriasFlat),
  ];

  return (
    <section className="w-screen pt-24 ">
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="text-text-primario text-6xl font-semibold">
          Nuesto Blog
        </h1>
        <h2 className="text-text-secundario pt-3 pb-10">
          Obtenga los últimos artículos de nuestra revista, escriba, discuta y
          comparta
        </h2>
        <div className="flex ">
          <DropdownCategorias categorias={categoriasUnicas} />
        </div>
      </div>
      <section className="w-[80%] grid grid-cols-2 mx-auto place-items-center gap-6">
        {posts.map((post) => (
          <CardPageBlog
            key={post.sys.id}
            srcImg={`https:${post.fields.image.fields.file.url}`}
            altImg={`Imagen de ${post.fields.image.fields.title}`}
            title={post.fields.title}
            description={post.fields.description}
            slug={post.fields.slug}
            tag={post.fields.tags}
            fecha={post.sys.createdAt}
            autor={post.fields.autor}
          />
        ))}
      </section>
    </section>
  );
}
