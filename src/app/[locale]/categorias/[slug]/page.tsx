import CardPageBlog from "@/app/components/CardPageBlog";
import { client } from "@/app/lib/client";
import PageBlog from "@/interfaces/pageBlog";

import Post from "@/interfaces/post";

import { Metadata } from "next/types";

type Props = {
  params: {
    slug: string;
  };
};

export const dynamic = "auto",
  fetchCache = "auto",
  revalidate = 10;

export default async function EntradasCategoria({ params }: Props) {
  const { slug } = params;

  const response = await client.getEntries({
    content_type: "blog",
    "fields.tags": slug,
  });

  const posts: PageBlog[] = response.items;

  return (
    <section className="">
      <div className="pt-20">
         <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary text-center mb-10">
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <CardPageBlog
            key={post.id}
            title={post.title}
            description={post.description}
            srcImg={post.srcImg}
            altImg={post.altImg}
            slug={post.slug}
          />
        ))}
      </div>
      </div>
     
    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: "Entradas de la categoría " + slug,
  };
}