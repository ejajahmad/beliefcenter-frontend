import PostCard from "@/components/Global/Card/PostCard";
import Container from "@/components/Global/Container";
import BannerFeaturedCard from "@/components/News/BannerFeaturedCard";
import FeaturePost from "@/components/News/FeaturePost";
import SearchBox from "@/components/News/SearchBox";
import React, { useEffect, useState } from "react";

function Home() {

  // redirect to /news
  useEffect(() => {
    window.location.href = "/news";
  }, []);

  return (
    <>
    </>
  );
}

export default Home;
