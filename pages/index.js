import PostCard from "@/components/Global/Card/PostCard";
import Container from "@/components/Global/Container";
import Header from "@/components/Global/Header";
import BannerFeaturedCard from "@/components/Home/BannerFeaturedCard";
import FeaturePost from "@/components/Home/FeaturePost";
import SearchBox from "@/components/Home/SearchBox";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <section className="section">
        <Container>
          <div className="text-center">
            <h1 className="headingPrimary">DekhoCampus News</h1>
            <p className="mt-2 mb-10 text-sm md:text-base text-gray-600 mx-auto">
              Updates on the Latest Career Opportunities, Online Education,
              Online Universities, & more.
            </p>
          </div>
          <BannerFeaturedCard />
          <SearchBox />
        </Container>
      </section>
      <FeaturePost />
      <section className="section">
        <Container>
          <h2 className="headingSecondary mb-4">Latest Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-100 px-6 py-2 text-blue-600 font-bold rounded-lg cursor-pointer">Load More</button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
