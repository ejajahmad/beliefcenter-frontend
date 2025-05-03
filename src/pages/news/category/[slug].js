import Breadcrumb from "@/components/Global/Breadcrumb";
import PostCard from "@/components/Global/Card/PostCard";
import Container from "@/components/Global/Container";
import PostByCategoryGrid from "@/components/News/PostByCategoryGrid";
import { GetNewsCategoryBySlug } from "@/service/newsService";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export async function getServerSideProps(context) {
  try {
    const { slug } = context.params;
    const category_res = await GetNewsCategoryBySlug(slug);
    const category = category_res.data.data[0];
    return {
      props: { slug, category },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

function PostCategory({ slug, category }) {
  return (
    <>
      <Head>
        <title>{category?.meta_title || category.name}</title>
        <meta name="description" content={category?.meta_description || category.name} />
        <link rel="canonical" href={`https://beliefcentre.com/news/category/${slug}`} />
      </Head>
      <section className="section bg-light-blue text-center">
        <Container>
          <h1 className="font-bold text-lg lg:text-2xl">{category.name}</h1>
          <p>Explore posts under {category.name}</p>
        </Container>
      </section>
      {/* <PostByCategoryGrid category={category} /> */}
    </>
  );
}

export default PostCategory;
