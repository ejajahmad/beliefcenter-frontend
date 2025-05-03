import Container from "@/components/Global/Container";
import BannerFeaturedCard from "@/components/News/BannerFeaturedCard";
import FeaturePost from "@/components/News/FeaturePost";
import PostGrid from "@/components/News/PostGrid";
import SearchBox from "@/components/News/SearchBox";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export async function getServerSideProps() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/blog_config`, {
      params: {
        fields: "news_meta_title, news_meta_description, news_rectangular_ad_link, news_rectangular_ad_image",
      },
    });

    const data = response.data.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

function NewsIndex({ data }) {
  const [config, setConfig] = useState({
    title: "BeliefCentre News",
    description: "Get counselling and career advice from Belief Centre.",
  });

  return (
    <>
      <Head>
        <title>{data?.news_meta_title || config.title}</title>
        <meta name="description" content={data?.news_meta_description || config.description} />
        <link rel="canonical" href={`https://beliefcentre.com/news`} />
      </Head>
      <section className="section">
        <Container>
          <div className="text-center">
            <h1 className="">
              <span className="text-green-500">Belief</span> Center News
            </h1>
            <p className="mt-2 mb-10 text-sm md:text-base text-gray-600 mx-auto">{data?.news_meta_description || config.description}</p>
          </div>
          <BannerFeaturedCard />
          <SearchBox />
        </Container>
      </section>
      <FeaturePost />
      <PostGrid />
    </>
  );
}

export default NewsIndex;
