import PostCard from "@/components/Global/Card/PostCard";
import Container from "@/components/Global/Container";
import BannerFeaturedCard from "@/components/Home/BannerFeaturedCard";
import FeaturePost from "@/components/Home/FeaturePost";
import SearchBox from "@/components/Home/SearchBox";
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
